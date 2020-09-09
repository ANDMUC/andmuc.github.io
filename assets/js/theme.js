galleryPhotoDiv = document.querySelectorAll(".gallery-parent-div div");
burger = document.querySelector(".burger");
navBar = document.querySelector(".navigation");
navLinks = document.querySelectorAll(".navigation a");

// image increases in size on hover
galleryPhotoDiv.forEach((div) => {
  div.addEventListener("mouseover", function () {
    div.style.transition = "all 0.4s";
    div.style.transform = "scale(1.1)";
  });
  div.addEventListener("mouseout", function () {
    div.style.transition = "all 0.4s";
    div.style.transform = "scale(1)";
  });
});

burger.addEventListener("click", () => {
  // toggle navbar
  navBar.classList.toggle("active-navbar");
});

// navbar slides back in when a "navlink" is clicked
navLinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    navBar.classList.remove("active-navbar");
  });
});
