const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
    // this = the btn | icon & bg changed
    this.classList.toggle("is-open");

    // the acc-content
    const content = this.nextElementSibling;

    // IF open, close | else open
    if (content.style.maxHeight) content.style.maxHeight = null;
    else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));


document.onreadystatechange = function () {
    let lastScrollPosition = 0;
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function (e) {
        lastScrollPosition = window.scrollY;

        if (lastScrollPosition > 100) navbar.classList.add("navbar-dark");
        else navbar.classList.remove("navbar-dark");
    });
};
// NAVBAR

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });

    // Toggle dropdown menu on click
    $(".nav-item.dropdown").on("click", function (e) {
        var $el = $(this).children(".dropdown-menu");
        var isVisible = $el.is(":visible");
        $(".dropdown-menu").not($el).hide(); // Hide other open dropdowns
        $el.toggle(!isVisible); // Toggle the current dropdown
        e.stopPropagation(); // Stop the event from propagating
    });

    // Close dropdown if clicked outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".nav-item.dropdown").length) {
            $(".dropdown-menu").hide();
        }
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    // Apply sliding effect to background image
    let backgroundImages = document.getElementsByClassName("background-image");
    for (let j = 0; j < backgroundImages.length; j++) {
        backgroundImages[j].style.transform = `translateX(${
            100 * (j - slideIndex + 1)
        }%)`;
    }

    setTimeout(showSlides, 20000); // Change image every 4 seconds
}
