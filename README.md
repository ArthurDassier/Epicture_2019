# Epicture

## How to use it

Go in the repo and use npm start or yarn start in order to execute the program.
Use Expo on your phone and scanne the QRcode. If it's doesn't work, go on the
pageweb and turn it on the tunnel mode (that will take more time but it will 
work).
_______________________________________________________________________

### Interface

You have 3 parts:
-Home -> represent the Galery of Imgur
-Profile -> represent your profil
-Favorit -> represent all favorites of your profil

## Install / Module

You must install expo-gli and yarn (use command : $nmp intall).

### Code structure

App.js -> main
Components/
    AppContainer.js -> toolbar which manage the app
    Descript.js -> component which represent the information when you click on a picture
    General.js -> first component which call other component and manage the login/home
    Home.js -> component that manage the home application
    LoginButtons.js -> component that manage the loggin
    Preview.js -> small component for print the tool bar under every picture
    Profile.js -> component that manage the profil page

### Structure

    App____Login
       |
       |___HomeLog___Home -> click on picture -> Picture
               |
               |_____Profile -> click on picture -> Picture
               |
               |_____Favorit -> click on picture -> Picture