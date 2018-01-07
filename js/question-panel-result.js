/**
 * Created by Sharmo on 1/6/2018.
 */

// The following global variables are from the file question-panel.js ::
// var correctAns = [];
// var questions = [];
// var options_2D = [];

// global variables

function seeResult(test_id){
    console.log(test_id);
    $('#result-modal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $("#result-modal-title").html("Results of "+test_id);
    renderChart('question-composition-chart');
    renderChart('correctness-composition-chart');
    $('#result-modal').modal('show');
}


function evaluateTest() {
    var qsno;
    var submitted_ans;
    var score = 0;
    for (var i = 0; i<questions.length; i++){
        qsno = i+1;
        submitted_ans = getRadioVal(qsno+"" );
        if (submitted_ans === correctAns[i].replace("Op","").replace("op",""))
            score += 1;
        alert(questions[i] + "\n" +
            submitted_ans + ":::" + correctAns[i] + "\n"+
            options_2D[i][submitted_ans] + ":::" +
            options_2D[i][correctAns[i].replace("Op","").replace("op","")]);
    }
    renderWelcomeScreen();  // this function is in file question-panel.js
    renderResults(score);
}


function renderResults(score) {
    var score_render = (score+0)+"/"+(questions.length*10);
    document.getElementById("numerical-score").innerHTML = score_render;
}


// BEGINNING OF PI-CHART RELATED FUNCTIONS

function renderChart(divToRender, data) {
    var chart = AmCharts.makeChart(divToRender, {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "addClassNames": true,
        "innerRadius": "30%",
        "defs": {
            "filter": [{
                "id": "shadow",
                "width": "100%",
                "height": "100%",
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
        "dataProvider": [{
            "country": "Lithuania",
            "litres": 501.9
        }, {
            "country": "Czech Republic",
            "litres": 301.9
        }, {
            "country": "Ireland",
            "litres": 201.1
        }, {
            "country": "Germany",
            "litres": 165.8
        }, {
            "country": "Australia",
            "litres": 139.9
        }, {
            "country": "Austria",
            "litres": 128.3
        }, {
            "country": "UK",
            "litres": 99
        }, {
            "country": "Belgium",
            "litres": 60
        }, {
            "country": "The Netherlands",
            "litres": 50
        }],
        "valueField": "litres",
        "titleField": "country",
        "export": {
            "enabled": false
        }
    });


    chart.addListener("rollOverSlice", function(e) {
        handleRollOver(e);
    });


    function handleRollOver(e){
        var wedge = e.dataItem.wedge.node;
        wedge.parentNode.appendChild(wedge);
    }

}

// END OF PI-CHART RELATED FUNCTIONS