//Call elements in tabs section classes
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

//function to remove the contents of tab-links and tab-contents
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  //If you click on the skills, experience, and education tabs, it will display the contents
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//add functionality to the button for side menu for smaller screen
var sidemenu = document.getElementById("sidemenu");

//function for opening the side menu
function openmenu() {
  sidemenu.style.right = "0";
}

//function for closing the side menu
function closemenu() {
  sidemenu.style.right = "-200px";
}

//Adds functionality to submit form to send responses to my google sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzABUxf4Vev34LA630yAtoVB0hEznEqZkgkSZ1bBSpvuxmF1215VOKDPy4DOQF3b8D-_g/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});


//Creating an animation for a section on pc display
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
