const mainImage = document.getElementById("mainImage");
const imageLinks = document.querySelectorAll(".links a");
const opacity100Btn = document.getElementById("opacity100");
const opacity50Btn = document.getElementById("opacity50");

// Change image when link is clicked
imageLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    mainImage.src = link.dataset.img;
  });
});

// Change opacity
opacity100Btn.addEventListener("click", () => {
  mainImage.style.opacity = "1";
});

opacity50Btn.addEventListener("click", () => {
  mainImage.style.opacity = "0.5";
});
``