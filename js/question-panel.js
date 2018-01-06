/**
 * Created by Sharmo on 1/3/2018.
 */

var TEST_TIME = 5;

//global variables
var clearTimer = false;



function addQuestions(qsno, question, options, questionType, optionTypes){
    console.log(qsno);
    console.log(options);
    console.log(optionTypes);
    var panel = document.getElementById("question-panel");
    var image = document.createElement("img");
    // Starting to Render Question
    var div = document.createElement("div");
    var classAttr = document.createAttribute("class");
    classAttr.value = "question";
    div.setAttributeNode(classAttr);
    var text = document.createTextNode("Question "+qsno);
    div.appendChild(text);
    var breakElement = document.createElement("br");
    div.appendChild(breakElement);
    if (questionType === 'T'){
        text = document.createTextNode(question);
        div.appendChild(text);
    }
    else if (questionType === 'I'){
        image.src = question;
        image.setAttribute("height", "250");
        image.setAttribute("width", "500");
        image.setAttribute("border", "1px solid #ddd");
        image.setAttribute("border-radius", "4px");
        image.setAttribute("padding", "5px");
        div.appendChild(image);
    }
    panel.appendChild(div);
    if (questionType === 'I'){
        breakElement = document.createElement("br");
        panel.appendChild(breakElement);
    }
    // End of Rendering Question
    // Starting to render options
    div = document.createElement("div");
    classAttr = document.createAttribute("class");
    classAttr.value = "options";
    div.setAttributeNode(classAttr);
    // loop over all the options
    var i;
    var input;
    for (i = 0; i < options.length; i++) {
        image = document.createElement("img");
        input = document.createElement("INPUT");
        input.setAttribute("type", "radio");
        input.name = qsno+"";
        input.value = i+1;
        div.appendChild(input);
        if (optionTypes[i] === 'T'){
            text = document.createTextNode("   "+options[i]);
            div.appendChild(text);
        }
        else if (optionTypes[i] === 'I'){
            image.src = options[i];
            image.setAttribute("height", "150");
            image.setAttribute("width", "400");
            image.setAttribute("border", "1px solid #ddd");
            image.setAttribute("border-radius", "4px");
            image.setAttribute("padding", "5px");
            div.appendChild(image);
            breakElement = document.createElement("br");
            div.appendChild(breakElement);
        }

        breakElement = document.createElement("br");
        div.appendChild(breakElement);
    }
    panel.appendChild(div);
    panel.appendChild(breakElement);
    // End of Rendering Options
}

function renderSubmitButton(){
    var panel = document.getElementById("question-panel");
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Submit";
    var classAttr = document.createAttribute("class");
    classAttr.value = "btn btn-primary btn-block btn-large";
    button.setAttributeNode(classAttr);
    button.onclick = evaluateTest;
    panel.appendChild(button);
}


function renderTest(test_number, level_number){
    var options = [];
    var optionTypes = [];
    var qsno;
    var question;
    var questionType;
    // 1. get the questions from backend
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://ec2-52-27-78-103.us-west-2.compute.amazonaws.com/getquestions",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "761cd66f-ad2d-d82c-5da7-0f797e658519"
        },
        "processData": false,
        "data": "{\n\t\"user_id\" : \"1\",\n\t\"level\" : \""+level_number+"\",\n\t\"test\" : \""+test_number+"\"\n}"
    };
    $.ajax(settings).done(function (response) {
        var question_data = JSON.parse(response)["question_data"];
        console.log(question_data);
        console.log(typeof  question_data);
        // 2. Loop through the question_data
        for (var i=0; i<question_data.length; i++){
            qsno = i+1;
            options[0]= question_data[i]["op1"];
            optionTypes[0] = question_data[i]["op1Type"];
            options[1] = question_data[i]["op2"];
            optionTypes[1] = question_data[i]["op2Type"];
            options[2] = question_data[i]["op3"];
            optionTypes[2] = question_data[i]["op3Type"];
            options[3] = question_data[i]["op4"];
            optionTypes[3] = question_data[i]["op4Type"];
            question = question_data[i]["qs"];
            questionType = question_data[i]["qsType"];
            addQuestions(qsno, question, options, questionType, optionTypes);
        }
        renderSubmitButton();
    });

    // for (var i=0; i<5; i++){
    //     qsno = i+1;
    //     options[0]= 'momentum and impulse';
    //     options[1] = 'energy and surface energy';
    //     options[2] = 'momentum and angular momentum';
    //     options[3] = 'force and surface tension';
    //     var question = 'Which of the following pairs of physical quantities have the same dimensions?';
    //     addQuestions(qsno, question, options);
    // }
    // renderSubmitButton()
}

function getRadioVal(name) {
    var val;
    // get list of radio buttons with specified name
    var radios = document.getElementsByName(name);
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}


function evaluateTest() {
    removeTimer();
    $("#myModal").modal();
    $("#modal-body-text").html("Well done! Your Exam Answers have been Successfully Submitted. <br>" +
        "Please contact Mr. Arindam Mitra for any clarifications.");
    var qsno;
    var submitted_ans;
    for (var i = 0; i<5; i++){
        qsno = i+1;
        submitted_ans = getRadioVal(qsno+"" );
        alert(qsno + ":::" + submitted_ans);
    }
    renderWelcomeScreen();
}


function timer() {
    // Set the date we're counting down to
    var countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + TEST_TIME);

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        console.log(now);

        if (clearTimer === true){
            clearInterval(x);
            document.getElementById("timer-clock").innerHTML = "";
            return;
        }


        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("timer-clock").innerHTML = hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            removeTimer();
            document.getElementById("timer-clock").innerHTML = "";//"EXPIRED";
            renderWelcomeScreen();
            $("#myModal").modal();
            $("#modal-body-text").html("Sorry! You have run out of time and the Exam has been submitted." +
                "<br> Please contact Mr. Arindam Mitra for any clarifications.");
        }
    }, 1000);

}

function removeTimer(){
    clearTimer = true;
    document.getElementById("timer-notification-style").style.background = "";
    document.getElementById("time-notification").innerHTML = "";
}

function renderWelcomeScreen(){
    var myNode = document.getElementById("question-panel");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    var panel = document.getElementById("question-panel");
    // Starting to Render Question
    var div = document.createElement("div");
    var classAttr = document.createAttribute("class");
    classAttr.value = "portal-welcome";
    div.setAttributeNode(classAttr);
    var idAttr = document.createAttribute("id");
    idAttr.value = "portal-welcome";
    div.setAttributeNode(idAttr);
    var text = document.createTextNode("Welcome to The Portal");
    div.appendChild(text);
    var breakElement = document.createElement("br");
    div.appendChild(breakElement);
    div.appendChild(breakElement);
    text = document.createTextNode("Please select an Appropriate Task from the Menu");
    div.appendChild(text);
    panel.appendChild(div);

}


function startTest(test_id, level_id){
    clearTimer = false;
    if (document.getElementById("portal-welcome") !== null)
        document.getElementById("portal-welcome").style.display = "none";
    var test_number = test_id.split(" ")[1];
    var level_number = level_id.split(" ")[1];
    renderTest(test_number, level_number);
    console.log(test_id);
    document.getElementById("timer-notification-style").style.background = "#10af0b";
    document.getElementById("time-notification").innerHTML = "Time Remaining for <br><b>"+test_id+"</b><br>";
    timer();
}

function seeResult(test_id){
    console.log(test_id);
    $('#result-modal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $("#result-modal-title").html("Results of "+test_id);
    $("#result-modal").modal();

}



