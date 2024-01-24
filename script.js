var tablinks = document.getElementsByClassName("tan-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzJaq_cE-Iy-tA4xReUW3FKzovk8V9lM_dNoIgoUzijA-1KMx5E0_0A6xp6bztlD2Bq/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text(); // You may want to parse the response if it contains useful information
    })
    .then((data) => {
      msg.innerHTML = "Thanks for Subscribing";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
    });
});



// menu 
var sidemenu=document.getElementById('sidemenu');

function openMenu(){
  sidemenu.style.right="0";
}
function closeMenu(){
  sidemenu.style.right="-200px";
}