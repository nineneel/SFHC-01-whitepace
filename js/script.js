const navToggler = document.querySelector(".nav-toggler"),
    navbarItems = document.querySelector(".navbar-nav"),
    main = document.querySelector("main"),
    footer = document.querySelector("footer");

navToggler.addEventListener("click", () => {
    navbarItems.classList.toggle("show-items");
    main.classList.toggle("transparent");
    footer.classList.toggle("transparent");

    console.log(navbarItems.classList);
});
