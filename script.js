function loadContent(page) {
    fetch(`${page}.htm`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`[onclick="loadContent('${page}')"]`).classList.add('active');

            // Reinitialize slider if reviews page is loaded
            if (page === 'reviews') {
                initSlider();
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

// Load the home page by default
document.addEventListener("DOMContentLoaded", () => {
    loadContent('home');
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
