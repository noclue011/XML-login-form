# Introduction
This is a project that I completed during my Masters Degree program. This is a login form that uses an XML document to allow users to log into the form and create new user accounts.

Project is live at https://noclue011.github.io/XML-login-form/

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
This project is a login form that connects with an XML file. The login form appears as a popup when the login button is clicked The XML file stores username/password combinations that a user can use to log into the form itself. The user can also create their own username/password that they can then use to log into the form.

This project was created as an assignment for my Masters degree program. The assignment required me to create a login form that used an XML file to log users in and allow them to create their own login. Since this project wasn't hosted on a server it ran into issues with the CORS protocol, along with other issues like only allowing users to create 1 new account at a time and not saving the new information after the application is closed. 


## Technologies Used
* Javascript 1.5
* XML
* CSS
* HTML


## Features
* Stores accepted user logins in an XML file
* Allows users to log in with any username/password combination stored in the XML file
* Users can create 1 new username/password that they can use to log in


## Setup
Project is live at https://noclue011.github.io/XML-login-form/


## Usage
The login popup form lists example logins that can be used to login to the form. The user can also create 1 new account in the form itself


## Project Status
no longer being worked on

This project is not complete since it doesn't actually add new user accounts to the XML file. Instead it only edits a special existing entry in the file, which means users can only create 1 new account at a time and the new account is not saved once the project is closed. I've decided to not continue working on this since this project was for an assignment that has already been completed, also if I was to add a working login form to a web application I would use a database to store user login information instead of an XML file.


## Room for Improvement

Room for improvement:
* Making the project actually add new user accounts to the XML file instead of overwriting 1 specific entry.
