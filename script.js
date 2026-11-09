/* =========================================
   I & B — ISRAEL BONIFACE PORTFOLIO
   JAVASCRIPT FUNCTIONALITY
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Open and close mobile menu
if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        // Update menu icon
        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = "&times;";
            menuBtn.setAttribute("aria-expanded", "true");
        } else {
            menuBtn.innerHTML = "&#9776;";
            menuBtn.setAttribute("aria-expanded", "false");
        }

    });


    // Close menu when a navigation link is clicked
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.innerHTML = "&#9776;";
            menuBtn.setAttribute("aria-expanded", "false");

        });

    });


    // Close menu when clicking outside navigation
    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedMenuButton = menuBtn.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {

            navLinks.classList.remove("active");

            menuBtn.innerHTML = "&#9776;";
            menuBtn.setAttribute("aria-expanded", "false");

        }

    });


    // Close menu with Escape key
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuBtn.innerHTML = "&#9776;";
            menuBtn.setAttribute("aria-expanded", "false");

        }

    });

}


/* =========================================
   SMOOTH SCROLLING
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   FOOTER CURRENT YEAR
========================================= */

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}