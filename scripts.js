
/* DOM declaration */
let button_userInput = document.getElementById("button_userinput");
let button_backToTop = document.getElementById("button_backToTop");

/* Gets the current date and time and coverts to a robot-headshot */
let currentDate = new Date();
document.getElementById("cardmaker_image").src = ("https://robohash.org/" + currentDate + "?set=set3")

/* Eventlisteners for buttons */
button_userInput.onclick = function() {
    convertUserInput();
    generateEmployeeTelephone();
    generateEmployeeID();
    generateEmployeeEmail();
    goToAnchor("#businesscard");
};

button_backToTop.onclick = function() {
  goToAnchor("#home");
};

/* Functions */
let convertUserInput = () => {
  let userinput = document.getElementById("userinput").value
  document.getElementById("card_image").src = ("https://robohash.org/" + userinput + "?size=200x200")
  document.getElementById("card_username").innerHTML = (userinput);
};

  let generateEmployeeID = () => {
    let number = Math.floor(Math.random() * 99999999) + 11111111;
    document.getElementById("employee_ID").innerHTML = ("Employee ID: #" + number);
  };

  let generateEmployeeTelephone = () => {
    let number = Math.floor(Math.random() * 99999999) + 11111111;
    document.getElementById("employee_Telephone").innerHTML = ("Telephone: 06-" + number);
  };

  let generateEmployeeEmail = () => {
    document.getElementById("employee_Email").innerHTML = ("Email: email@thecompany.com ");
  };

  function goToAnchor(anchor) {
    document.location = anchor;
    return false;
  }