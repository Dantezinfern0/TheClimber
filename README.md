# The Climber - https://rock-climbing-log-and-planner.herokuapp.com

This app was inspired by MountainProject.com

I wanted an app that I could save information about routes for future visits.

This grew into a weather check and nearby climbing routes feature and presentation of MountainProject.com data for reference and otherwise.

I used auth0 for authentication. I built my own Api to store my personal logs and eventually I want to be able to store MountainProject information for offline use or in case their site goes down.
Page Explanations:
TheClimber - this button will take you to the home page which is just a picture. If your not logged in yet it will prompt you to login.

MountainProject.com - This leads you to a new tab where the MountainProject.com website is displayed

Weather/Planning - This is the page that you can use to reference weather conditions. I paired it with the MountainProject Api so that it also displays nearby routes to climb.

LogAClimb - this page is for inputting a new climb into the log database

BrowseLogs - This page is where you can view the saved logs created and delete ones if necessary.

ToDo - This page displays information from the MountainProject Api that I classified as "To Do"

ClimbingRecord - This draws information from the MountainProject Api that I have in my list of 'ticks' which are completed climbs

Login - click to login

Logout - click to logout

End 'Page Exaplanations'

In the future I want to add to my api to store more information from the weather api and mountain project to aid in the logging of my climbs. I think implementing a picture uploading feature would also be a nice thing to enhance the logging usefulness.
