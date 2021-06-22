let button_userInput = document.getElementById("button_userinput");
let button_backToTop = document.getElementById("button_backToTop");
let response = fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5');

/* Gets the current date and time and coverts to a robot-headshot */
let currentDate = new Date();
document.getElementById("cardmaker_image").src = ("https://robohash.org/" + currentDate + "?set=set3")

/* When the button is clicked this function takes whatever the user had input and converts it to a robot image */
/* Then it displays the entered name next to the image as an employee */
/* Lastly it moves the page to the anchor displaying the businesscard */
button_userInput.onclick = function() {
    let userinput = document.getElementById("userinput").value
    document.getElementById("card_image").src = ("https://robohash.org/" + userinput + "?size=200x200")
    document.getElementById("username").innerHTML = (userinput);
    generateTelephoneNumber();
    goToAnchor("#businesscard");
};

button_backToTop.onclick = function() {
  goToAnchor("#home");
};

/* This function simply moves the viewport to the given anchor, is called at .onclick */
function goToAnchor(anchor) {
    document.location = anchor;
    return false;
  }

  let generateTelephoneNumber = () => {
      let number = Math.floor(Math.random() * 99999999) + 11111111;
    document.getElementById("telephonenumber").innerHTML = ("Telephone number: 06-" + number);
  };

