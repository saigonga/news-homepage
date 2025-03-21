const navbar = document.querySelector("nav");
const openMenu = document.getElementById('menu-button');
const closeMenu = document.getElementById('menu-close');

openMenu.addEventListener('click', () => {
    navbar.classList.add('open');  // Use "open" instead of "show"
    navbar.style.opacity = "1";
    navbar.style.zIndex = "99999";
});

closeMenu.addEventListener('click', () => {
    navbar.classList.remove('open');
    navbar.style.opacity = "0";
    navbar.style.zIndex = "-99999";
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        navbar.classList.remove('open');
        navbar.style.opacity = "1";
        navbar.style.zIndex = "auto";
    } else {
        navbar.style.opacity = "0";
        navbar.style.zIndex = "-99999";
    }
});
