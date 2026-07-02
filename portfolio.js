document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".project-swiper").forEach(function (slider) {
        const slideCount = slider.querySelectorAll(".swiper-slide").length;
        const usesPdfPages = Boolean(slider.querySelector('img[src*="profile-2024"]'));
        slider.classList.toggle("pdf-project-swiper", usesPdfPages);
        slider.classList.toggle("single-slide", slideCount === 1);

        new Swiper(slider, {
            loop: slideCount > 1,
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: slider.querySelector(".swiper-pagination"),
                clickable: true
            },
            navigation: {
                nextEl: slider.querySelector(".swiper-button-next"),
                prevEl: slider.querySelector(".swiper-button-prev")
            },
            allowTouchMove: slideCount > 1
        });
    });

    const navButton = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarSupportedContent");

    if (navButton && navbarMenu) {
        navButton.addEventListener("click", function () {
            const isOpen = navbarMenu.classList.toggle("show");
            navButton.setAttribute("aria-expanded", String(isOpen));
        });
    }
});

window.likePost = function (button) {
    const post = button.closest(".insta-post");
    const likeCount = post.querySelector(".like-count span");
    const icon = button.querySelector("i");
    const count = Number.parseInt(likeCount.textContent, 10) || 0;

    button.classList.add("liked");
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");

    likeCount.textContent = String(count + 1);
    button.setAttribute("aria-label", "Like project");
};

window.copyWebsiteLink = function (button) {
    const post = button.closest(".insta-post");
    const projectUrl = new URL(window.location.href);
    projectUrl.hash = post.id;

    navigator.clipboard.writeText(projectUrl.href).then(function () {
        button.classList.add("copied");
        window.setTimeout(function () {
            button.classList.remove("copied");
        }, 1800);
    });
};

document.addEventListener("contextmenu", function (event) {
    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }
});

document.addEventListener("dragstart", function (event) {
    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }
});