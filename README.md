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

#### Login/Registration Page

- 12/10/2023 - Created the layout of the page and added some styling to mimic the figma design.
  1. Test 1: When I started making I encountered an issue where React would get confused with all the imports so I had to basically start the page from scratch as this seemed like the only possible solution
  2. Test 2: After that I managed to make the page with no issues however there has clearly been some kind of structural error with my css as the font for the nav bar buttons no longer loads. Also the registration box isn't actually centered on the page which needs to       be addressed
- 17/10/2023 - Made the navigation between the home page and the login/registration pages.
  1. Test 1: The query param doesn't change when i click login/register on the actual form
![image](https://github.com/j-koziel/titanic-fitness/assets/68497216/a9459f7c-0aff-49cd-bf3e-f6757176b0b7)

 
### Profile page
- 13/10/2023 - Started making the profile page with all the user info, training history and workout/nutrition plans. Some issues I encountered were:
  1. Test 1: I made the container for the user info and when I created the history container somehow the height of the user container was affected meaning that there were elements overflowing
  2. Test 2: Fixed the height issue. Now I was trying to create the container with the plans but for some reason it was not appearing. Then I added some content to it and that's when it appeared. Another issue that I had encountered was that the page width was behaving unusually. It was slightly smaller than the width of the screen on the home page but the profile page is fine... however when I switch to a smaller screen the profile page is also affected.
- 16/10/2023 - Completed making the workout/eating plans layout. I basically made the meals a list of items containing the meal type, meal title and other info. Later these will be clickable so that a modal appears and lets you edit the plans.
  1. Test 1: Everything works as it should. I managed to fix the issue with the width... turns out I had an invisible scrollbar in my css which was creating the gap.
 ![image](https://github.com/j-koziel/titanic-fitness/assets/68497216/d8a7f24e-3e6c-4a23-9053-08e4832be6f7)


## Backend (Version 2) - 1 week
- 17/10/2023 - Started making the backend. Made the mock db and created a route which gets all the users from the mock db


## Backend/frontend integration (Version 3) 1 - week
