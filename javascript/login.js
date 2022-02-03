//Sets global variables that can be used in all of the following functions
var xmlFile;
var xhttp;
var xmlDoc;
var x;

//runs when the html document first loads
function load() {
    //loads the local xml file
    xmlFile = "users.xml";
    //opens a new XMLHttpRequest and sends a GET request to retrieve the xml file
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", xmlFile, true);
    xhttp.send();
    //when the httprequest is sent the function xmlFunction() runs
    xhttp.onreadystatechange = function() {
         xmlFunction(this.response);
    };

    //runs when the httprequest is run
    function xmlFunction(xml) {
        //creates a new DOMParser that is used to save the xml document as a javascript DOM object within the variable xmlDoc
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xml, "text/xml");
        //All of the USER tags in the xml document are saved in the variable x
        x = xmlDoc.getElementsByTagName("USER");
    }
}

//runs when the user tries to log in to their account
function login() {
    //variable used to determine if the user account is not found
    var userNumber = 1;

    //runs through every user entry within the xml document
    for (var elem of x) {
        //the username and password values within the current user in the xml file are saved in variables, along with the info the user entered to log in
        var username = elem.getElementsByTagName("USERNAME")[0].childNodes[0].nodeValue;
        var password = elem.getElementsByTagName("PASSWORD")[0].childNodes[0].nodeValue;
        var savedUsername = document.getElementById("username").value;
        var savedPassword = document.getElementById("password").value;

        //if the user entered the correct log in information the user is taken to the successful login html page and the for loop is broken
        if (username == savedUsername && password == savedPassword) {
            window.location.href = "successful_login.html";
            break;
        }

        //if the current USER node information in the xml file does not match the information the user entered then the userNumber variable is incremented
        if (userNumber != x.length) {
             userNumber = ++userNumber;
        //if the userNumber variable shows that the for loop has gone through every user within the xml file then a login fail message is inserted into the 
        //html document using jquery
        } else if (userNumber == x.length) {
            $('.login_failed').html("Login Failed! Please try logging in with a different username or password.");
        }

    }
}
//runs when the user registers a new account
function userRegistration() {
    //collects the registration information that the user entered into the registration form
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var newUser = xmlDoc.createElement("Birthday");
    //collects the current login information in the last node of the xml document
    xmlDoc.getElementsByTagName("USER")[0].appendChild(newUser);
    xmlDoc.getElementsByTagName("USERNAME")[2].childNodes[0].nodeValue = newUsername;
    xmlDoc.getElementsByTagName("PASSWORD")[2].childNodes[0].nodeValue = newPassword;
    //inserts the username and password for the new user account into the suggested log ins section of the login form
    $('.customUser').html("Username: " + xmlDoc.getElementsByTagName("USERNAME")[2].childNodes[0].nodeValue
    + "<br>Password: " + xmlDoc.getElementsByTagName("PASSWORD")[2].childNodes[0].nodeValue);
}
