WDI-025 Project 2 - Full Stack Project Front End
---
Planning

I planned this project by first deciding what kind of application to build.  I thought the simplest way to meet project would be something like a to do list.  From their (to expand the project a little) I thought I grocery list is just like a to do list.  And finally from a grocery list, a project I thought I could bring my own creativity would be a Homebrewing Recipe site (which is much like a grocery list only with some directions on what to do with the groceries).

After deciding on what to build, I started with user stories and wireframes to imagine what I would want out of this application. After building the back end, I went about building the front end in the following way

- Build and test authentication in JavaScript (with curl)
- Build a basic ui to test the users ability to authenticate
- Build and test CRUD actions in JavaScript
- Build a basic ui for CRUD actions
- Style a little
- Modify actions to only show what I wanted to show (example only one users recipes)
- Modify ui as needed
- Debug and modify as needed

---
Development

Building the front end of this project was by far the hardest part for me.  I decided to keep the design simple and if I had time update at the end.  I started with all the authenications neccessary for the application.  Namely a sign up/in/out and a change password.  I built these out in JavaScript with AJAX calls to the API, and tested them with curl scripts.  From their I added some rough ui to test if a user would be able to successfully complete authenication.  Next, I built out the CRUD actions for my resource in much of the same way (testing with curl and adding simple ui).

Debugging was also somewhat difficult during this project.  A lot of the problems I encountered were not with actual bugs, but with an action performing exactly as expected, but not as I wanted them to act.  I was able to trace down most of these problems and find a fix for them.  The actual bugs that were thrown were a lot similar to Project 1, so they were a little easier to find and fix without throwing additional bugs.

Styling was the last thing I got to in this project, and by far the area that needs the most work.  I was able to get all information I wanted to be on the screen to display, but it is far from the most pleasing user interface that one could come across.  With more time I would have kept styling the page (see future fixes).

---
Unsolved Problems and Future Fixes

- Update/Destroy/Get actions without having to enter in the ID, instead clicking right on the recipe to bring you to the action
- Change styling to be much more user friendly and appealing, especially
  - How a recipe is displayed
  - Move buttons to a sidebar or the navbar

---
Technologies

- JavaScript
- jQuery
- AJAX
- HTML/CSS
- Curl scripts

---
Wireframes

[Wireframes](https://imgur.com/a/ZBh3BhT)


---
User Stories

As a user of this game I would like...
- Log in to my own account
- Update my account details
- view the list of recipes available
- add/save my own recipes to the site
- search for specific recipes or ingredients
- comment on/rate/give any sort of feedback on recipes I like or hate

---
Back end repo

[Back End](https://github.com/reganbp/wort-api)
