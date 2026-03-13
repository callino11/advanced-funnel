document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("leadForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;

console.log(name,email); // test if button works

// redirect (temporary test)
window.location.href = "thankyou.html";

});
});
