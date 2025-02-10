
document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
      alert("All fields are required!");
      event.preventDefault();
    }
  });
  
  
  let index = 0;
  function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    for (let slide of slides) {
      slide.style.display = "none";
    }
    slides[n].style.display = "block";
  }
  setInterval(() => {
    index = (index + 1) % 3;
    showSlide(index);
  }, 3000);