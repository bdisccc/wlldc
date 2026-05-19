document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SWIPER SLIDER
    ========================= */

    new Swiper(".project-swiper", {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 0,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /* =========================
   MOBILE HAMBURGER TOGGLE FIX
========================= */

const navButton = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector("#navbarSupportedContent");

navButton.addEventListener("click", function () {
    if (navbarMenu.classList.contains("show")) {
        navbarMenu.classList.remove("show");
    } else {
        navbarMenu.classList.add("show");
    }
});

    /* =========================
       LIKE BUTTON
    ========================= */

    window.likePost = function(button) {

        const post = button.closest(".insta-post");

        const likeCount = post.querySelector(".like-count span");

        const icon = button.querySelector("i");

        let count = parseInt(likeCount.innerText);

        button.classList.add("liked");

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

        likeCount.innerText = count + 1;
    };

    /* =========================
       SAVE BUTTON
    ========================= */

    const saveButtons = document.querySelectorAll(".save-btn");

    saveButtons.forEach(button => {

        button.addEventListener("click", () => {

            const icon = button.querySelector("i");

            button.classList.toggle("active");

            if (button.classList.contains("active")) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");
            }
        });
    });

});
/* =========================
   COPY WEBSITE LINK
========================= */

window.copyWebsiteLink = function (button) {
    navigator.clipboard.writeText(window.location.href);

    button.classList.add("copied");

    setTimeout(() => {
        button.classList.remove("copied");
    }, 1800);
};