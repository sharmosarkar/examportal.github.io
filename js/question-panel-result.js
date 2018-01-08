/**
 * Created by Sharmo on 1/6/2018.
 */

// The following global variables are from the file question-panel.js ::
// var correctAns = [];
// var questions = [];
// var options_2D = [];

// global variables
var score;      // keeps current score TODO : REMOVE WHEN BACKEND CONNECTED
var correctness_topic_composition = {};
var topic_wise_correctness_chart_data = [];
var topic_wise_qs_composiotion_chart_data = [];

function invalidatePresiousScores() {
    correctness_topic_composition = {};
    topic_wise_correctness_chart_data = [];
    topic_wise_qs_composiotion_chart_data = [];
    qs_topic_composition = {}; // this variable is in file question-panel.js
}

function seeResult(test_id){
    console.log(test_id);
    $('#result-modal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $("#result-modal-title").html("Results of "+test_id);
    renderResults();
    $('#result-modal').modal('show');
}


function evaluateTest() {
    var qsno;
    var submitted_ans;
    score = 0;
    for (var i = 0; i<questions.length; i++){
        qsno = i+1;
        submitted_ans = getRadioVal(qsno+"" );
        if (submitted_ans === correctAns[i].replace("Op","").replace("op","")){
            score += 1;
            if (correctness_topic_composition.hasOwnProperty(topics[i])){
                correctness_topic_composition[topics[i]] += 1;
            }
            else{
                correctness_topic_composition[topics[i]] = 1;
            }
        }
        else{
            if (!correctness_topic_composition.hasOwnProperty(topics[i])){
                correctness_topic_composition[topics[i]] = 0;
            }
        }
        alert(questions[i] + "\n" +
            submitted_ans + ":::" + correctAns[i] + "\n"+
            options_2D[i][submitted_ans] + ":::" +
            options_2D[i][correctAns[i].replace("Op","").replace("op","")]);
    }

    prepare_data_for_chart();

}

function prepare_data_for_chart(){
    // reformat qs_topic_composition to render pi-chart
    var row;
    var key;
    for (key in qs_topic_composition) {
        row = {"Topic":'', "Count":0};
        if (qs_topic_composition.hasOwnProperty(key)) {
            row["Topic"] = key;
            row["Count"] = qs_topic_composition[key];
            topic_wise_qs_composiotion_chart_data.push(row);
        }
    }
    // reformat qs_topic_correctness to render pi-chart
    for (key in correctness_topic_composition) {
        row = {"Topic":'', "Count":0};
        if (correctness_topic_composition.hasOwnProperty(key)) {
            row["Topic"] = key;
            row["Count"] = correctness_topic_composition[key];
            topic_wise_correctness_chart_data.push(row);
        }
    }
}


function renderResults() {
    var score_render = (score+0)+"/"+(questions.length);
    document.getElementById("numerical-score").innerHTML = score_render;
    console.log("qs_topic_composition");
    console.log(qs_topic_composition); // qs_topic_composition is in file question-panel.js

    renderChart('question-composition-chart', topic_wise_qs_composiotion_chart_data);
    renderChart('correctness-composition-chart',topic_wise_correctness_chart_data);
    $('#amcharts-chart-div').remove();
}


// BEGINNING OF PI-CHART RELATED FUNCTIONS

function renderChart(divToRender, data) {
    var chart = AmCharts.makeChart(divToRender, {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "addClassNames": true,
               "legend":{
           "position":"right",
           "marginRight":100,
           "autoMargins":false
       },
        "innerRadius": "30%",
        "defs": {
            "filter": [{
                "id": "shadow",
                "width": "200%",
                "height": "200%",
                "feOffset": {
                    "result": "offOut",
                    "in": "SourceAlpha",
                    "dx": 0,
                    "dy": 0
                },
                "feGaussianBlur": {
                    "result": "blurOut",
                    "in": "offOut",
                    "stdDeviation": 5
                },
                "feBlend": {
                    "in": "SourceGraphic",
                    "in2": "blurOut",
                    "mode": "normal"
                }
            }]
        },
        "dataProvider": data,
        "valueField": "Count",
        "titleField": "Topic",
        "export": {
            "enabled": false
        }
    });

    chart.addListener("init", handleInit);

    chart.addListener("rollOverSlice", function(e) {
        handleRollOver(e);
    });

       function handleInit(){
       chart.legend.addListener("rollOverItem", handleRollOver);
   }


    function handleRollOver(e){
        var wedge = e.dataItem.wedge.node;
        wedge.parentNode.appendChild(wedge);
    }

}

// END OF PI-CHART RELATED FUNCTIONS