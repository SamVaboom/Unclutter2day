function loadContent(page) {
    // Your loadContent function logic here
}

// Load the home page by default
document.addEventListener("DOMContentLoaded", () => {
    loadContent('home');
    initSlider(); // Initialize the slider when the document is loaded
});

function scrollToPricing() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.getElementById("main-header");
    const logo = document.getElementById("logo");
    const title = document.getElementById("title");
    const navLinks = document.getElementById("nav-links");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.padding = "10px 20px";
        logo.style.display = "none";
        title.style.fontSize = "2em";
        title.style.marginLeft = "20px";
        header.style.height = "50px";
        navLinks.style.top = "50%";
        navLinks.style.left = "auto";
        navLinks.style.right = "20px";
        navLinks.style.transform = "translateY(-50%)";
    } else {
        header.style.padding = "20px";
        logo.style.display = "block";
        title.style.fontSize = "3em";
        title.style.marginLeft = "0";
        title.style.top = "-20px";
        header.style.height = "auto";
        navLinks.style.top = "100px";
        navLinks.style.left = "50%";
        navLinks.style.right = "auto";
        navLinks.style.transform = "translate(-50%, -50%)";
    }
}

let slideIndex = 0;

function initSlider() {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("review-image");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

const reviews = [
    {
        text: "Review 1: This is an amazing service!",
        image: "image1.jpg"
    },
    {
        text: "Review 2: Very satisfied with the quality of work.",
        image: "image2.jpg"
    },
    {
        text: "Review 3: Highly recommend this to my friends and family.",
        image: "image3.jpg"
    }
];

let currentReviewIndex = 0;

function changeReview(direction) {
    currentReviewIndex += direction;
    if (currentReviewIndex < 0) {
        currentReviewIndex = reviews.length - 1;
    } else if (currentReviewIndex >= reviews.length) {
        currentReviewIndex = 0;
    }
    document.getElementById('review-text').innerText = reviews[currentReviewIndex].text;
    document.getElementById('review-image').src = reviews[currentReviewIndex].image;
}
