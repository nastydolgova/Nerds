"use strict";

let openBtn = document.querySelector(".form-btn");
let popup = document.querySelector(".modal");
let closeBtn = document.querySelector(".modal-close");
let smbtBtn = document.querySelector(".btn-form-sbmt");
let inputs = document.querySelectorAll(".user-info-txt");

openBtn.addEventListener("click", function () {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  popup.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (27 === e.keyCode && !popup.classList.contains("hidden")) {
    popup.classList.add("hidden");
  }
});

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("invalid", function (evt) {
    if (!inputs[i].valid) {
      inputs[i].setCustomValidity("Заполните поле верно");
      smbtBtn.addEventListener("click", function () {
        inputs[i].classList.add("invalid-info");
      });
    }
  });
}

let dots = document.getElementsByClassName("pagination-item");

let slideIndex = 1;

showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("pagination-item-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " pagination-item-active";
}
