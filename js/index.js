
function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://ec2-52-27-78-103.us-west-2.compute.amazonaws.com/auth",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": "{\n\t\"username\" : \""+username+"\",\n\t\"password\" : \""+password+"\"\n}"
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        var json_data = JSON.parse(response);
        var msg = json_data["msg"];
        if (msg === "Access Granted !!"){
            localStorage.setItem("FName", json_data["FName"]);
            localStorage.setItem("LName", json_data["LName"]);
            localStorage.setItem("user_id", json_data["user_id"]);
            window.location.href = '/portal.html';
        }
        else if (msg === "Access Denied !!"){
            msg = "Please enter the correct Password !!";
            document.getElementById("login-error-msg").innerHTML = msg;
        }

    });
}
