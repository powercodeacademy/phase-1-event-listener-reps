document.addEventListener("DOMContentLoaded", () => {
/*
  These exercises are to practice DOM manipulation. Core concepts to practice
  are using query selectors, updating elements on the page, and iterating.

  To get started, open up the `index.html` page in a web browser,
  and code your solutions in the `index.js` file.
*/

  // -------------- [Functions You'll Need] ---------------

  const increaseLikes = () => {
    const likesElement = document.querySelector("#instaLikes") // Finds the like count
    const newLikes = parseInt(likesElement.innerHTML) + 1 // Parses the number of likes out of the page text and adds 1
    likesElement.innerHTML = `${newLikes} likes` // // Adds the new number of likes back onto the page
  }

  const toggleTitle = () => {
    const titleElement = document.querySelector("#instaTitle") // Finds the title of the instagram post
    titleElement.classList.toggle("hidden") // Toggles a hidden class which hides/shows the text (check out the class in the css file!)
  }

  const alertClick = () => alert("You clicked a comment!") // Alerts with static text

  const changeToRed = event => event.target.classList.add("red") // Changes the color of what was clicked on to red (check out the class in the css file!)

  const alertFormSubmission = (event) => {
    event.preventDefault() // Prevents the form from doing the default html submit that triggers a page reload
    alert(`You submitted: ${event.target.description.value}`) // Alerts with dynamic text depending on what is in the text box
  }

  // -------------- [FIRST SECTION - PHOTO] ---------------

  // 1. Add an event listener to the heart that calls the "increaseLikes" function when clicked

  // 2. Add an event listener to the dog image that calls the "toggleTitle" function when clicked

  // 3. Add an event listener to each comment in the comment section that calls the "alertClick" function when clicked

  // 4. Add an event listener to each comment in the comment section that calls an anonymous function which calls "changeToRed(event)" when clicked.
  // (HINT: You will need to pass in the event in the anonymous arrow function)
  // (i.e someElement.addEventListener("someAction", (event) => someFunction(event)))

/* -------------- [SECOND SECTION - BOOK] --------------- */

  // 5. Add an event listener to the book image that calls the "alertClick" function when clicked.

  // 6. Add an event listener to the title of the book that calls an anonymous function which calls "changeToRed(event)" when clicked.
  // (HINT: You will need to pass in the event in the anonymous arrow function)


/* -------------- [THIRD SECTION - MOVIE] --------------- */

  // 7. Add an event listener to the movie image that calls the "alertClick" function when clicked.

  // 8. Add an event listener to the form that calls an anonymous function that calls the "alertFormSubmission" function when submitted.
  // (HINT: You will need to pass in the event in the anonymous arrow function)
})

