document.getElementById("leadForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch("https://script.google.com/macros/s/AKfycbxT271vxwuKKzM8pD9A_J2D0DOPoBJMhB3px_UH4wT3HnDmyPEca7S1GSoTzW4eb6f3CA/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
    window.location.href = "thankyou.html";
  })
  .catch(error => {
    console.error("Error:", error);
  });

});
