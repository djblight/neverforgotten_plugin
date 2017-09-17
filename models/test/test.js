"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

// STORY: As a developer nerd, I want to be able to take courses on web tech.
nightmare
  // Visit login page
  .goto("http://localhost:3000/users/signup")
  // Enter password.
  .screenshot("signup.png")
  // Enter username.
  .type("#textinput", "John Doe")
  // Enter username.
  .type("#city", "Miami")
  // Enter username.
  .type("#email", "johndoe@email.com")
  // Enter username.
  .type("#username", "johndoe")
  // Enter username.
  .type("#passwordinput", "1234")
  // Click login button. Always check if you've done this where necessary!
  // It's easy to forget.
  .click("#singlebutton")
  // Wait until the  link to the course catalog renders.
  // .wait("a[href='/learn/all']")
  .wait()
  // Click course catalog link.
  .screenshot("main.png")
  // End test
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });
