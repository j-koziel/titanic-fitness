# TODO
[] - Add sitemap
[] - Complete about page
[] - Complete gym locations page
[] - Complete subscriptions page
[] - Create gym database
[] - Create meal plans database
 
 # titanic-fitness

## deploy status

[![Netlify Status](https://api.netlify.com/api/v1/badges/f0565ff7-3544-4bc9-a941-9a1759e3f615/deploy-status)](https://app.netlify.com/sites/titanic-fitness/deploys)

# dev log

This is just a development log which I have to make as part of my school project :)

This is the format which I am using

Iteration

Feature

- tests

## Frontend (Version 1) - 1 week

### Nav Bar

05/10/2023 - I created the navigation bar which contains the logo for titanic fitness, the gradient for the background, the nav buttons. I also animated the buttons so that they grow on hover.

- Test 1: The animations are a bit weird where the nav bar buttons move together with the button that's being hovered over. Only one of the buttons should move. Over than that, the style is correct and the layout is perfect
- ![image](https://github.com/j-koziel/titanic-fitness/assets/68497216/9c9369be-afb2-475c-899c-2b42ee208bbf)

### Pages

#### Home Page

- 05/10/2023 - Added the main home page image and resized it to match the design
  1. Test 1: Having an issue where the image is a bit too big.... I think instead of making it fill part of the screen I'll make it just be the background.
- 10/10/2023 - Added the boxes for the home page with their respective text. Added animations to the buttons so that they look nicer.
  1. Test: The animation makes the other text move
  2. Test: Fixed the animations so that only the buttons move however the animation is still slightly delayed.
- 23/10/2023 - Added a socials section to the home page.

#### Login/Registration Page

- 12/10/2023 - Created the layout of the page and added some styling to mimic the figma design.
  1. Test 1: When I started making I encountered an issue where React would get confused with all the imports so I had to basically start the page from scratch as this seemed like the only possible solution
  2. Test 2: After that I managed to make the page with no issues however there has clearly been some kind of structural error with my css as the font for the nav bar buttons no longer loads. Also the registration box isn't actually centered on the page which needs to       be addressed
- 17/10/2023 - Made the navigation between the home page and the login/registration pages.
  1. Test 1: The query param doesn't change when i click login/register on the actual form
![image](https://github.com/j-koziel/titanic-fitness/assets/68497216/a9459f7c-0aff-49cd-bf3e-f6757176b0b7)

- 19/10/2023 - Created an Error component which displays if the user enters their details and there is an error in the backend.
  ![image](https://github.com/j-koziel/titanic-fitness/assets/68497216/8d84fb63-485f-4969-aff1-c0e0937d19ed)

- 02/11/2023 - Integrated with the backend. No authentication in any way (no jwt) just checks if the password and username match.
  1. Test 1: (data -> username: bobj password: testpass123) Was getting a CORS error on the frontend but in reality there was an error in the backend which was causing the error in the frontend. To fix this I added CORS middleware to the backend which fixed the issue.
  2. Test 2: (same data) Received a 422 unprocessable entity error. This was because I was using the wrong endpoint in the frontend to log in the user in the backend. After I changed the endpoint it worked as expected.
  3. Test 3: (different data) Logs in as well, and displays the correct data in the frontend. 


 
### Profile page
- 13/10/2023 - Started making the profile page with all the user info, training history and workout/nutrition plans. Some issues I encountered were:
  1. Test 1: I made the container for the user info and when I created the history container somehow the height of the user container was affected meaning that there were elements overflowing
  2. Test 2: Fixed the height issue. Now I was trying to create the container with the plans but for some reason it was not appearing. Then I added some content to it and that's when it appeared. Another issue that I had encountered was that the page width was behaving unusually. It was slightly smaller than the width of the screen on the home page but the profile page is fine... however when I switch to a smaller screen the profile page is also affected.
- 16/10/2023 - Completed making the workout/eating plans layout. I basically made the meals a list of items containing the meal type, meal title and other info. Later these will be clickable so that a modal appears and lets you edit the plans.
  1. Test 1: Everything works as it should. I managed to fix the issue with the width... turns out I had an invisible scrollbar in my css which was creating the gap.
- 19/10/2023 - Create workout modal and improve styling of workouts/meals section
- 25/10/2023 - Added video to workout modal
- 26/10/2023 - Added meal modal
- 27/10/2023 - Added functionality to get exercises from the API ninjas, exercises api.
  1. Test 1: The exercises come back as they are supposed to but there is a small security issue where I reveal the token in plain sight. This should be hidden from the git repository.
 ![image](https://github.com/j-koziel/titanic-fitness/assets/68497216/d8a7f24e-3e6c-4a23-9053-08e4832be6f7)
- 02/11/2023 - Now the profile page uses the user data that is received from the backend


## Backend (Version 2) - 1 week
- 17/10/2023 - Started making the backend. Made the mock db and created a route which gets all the users from the mock db
- 02/11/2023 - Created endpoints to register a new user and to log in a user. As mentioned before this does not have any proper or secure auth just checks usernames/passwords.
- 02/11/2023 - Added CORS middleware
- 02/11/2023 - Created Gym data model
- 02/11/2023 - Started making gym endpoints
