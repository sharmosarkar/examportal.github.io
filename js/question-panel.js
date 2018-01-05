/**
 * Created by Sharmo on 1/3/2018.
 */

var TEST_TIME = 1;

//global variables
var clearTimer = false;



function addQuestions(qsno, question, options){
    var panel = document.getElementById("question-panel");
    // Starting to Render Question
    var div = document.createElement("div");
    var classAttr = document.createAttribute("class");
    classAttr.value = "question";
    div.setAttributeNode(classAttr);
    var text = document.createTextNode("Question "+qsno);
    div.appendChild(text);
    var breakElement = document.createElement("br");
    div.appendChild(breakElement);
    text = document.createTextNode(question);
    div.appendChild(text);
    panel.appendChild(div);
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
        input = document.createElement("INPUT");
        input.setAttribute("type", "radio");
        input.name = qsno+"";
        input.value = i+1;
        div.appendChild(input);
        text = document.createTextNode("   "+options[i]);
        div.appendChild(text);
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


function renderTest(test_id){
    var options = [];
    var qsno;
    for (var i=0; i<5; i++){
        qsno = i+1;
        options[0]= 'momentum and impulse';
        options[1] = 'energy and surface energy';
        options[2] = 'momentum and angular momentum';
        options[3] = 'force and surface tension';
        var question = 'Which of the following pairs of physical quantities have the same dimensions?';
        addQuestions(qsno, question, options);
    }
    renderSubmitButton()
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


function startTest(test_id){
    clearTimer = false;
    if (document.getElementById("portal-welcome") !== null)
        document.getElementById("portal-welcome").style.display = "none";
    renderTest(test_id);
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



