/* ==================================================
   NAVBAR
================================================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ==================================================
   MOBILE MENU
================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.getElementById("navLinks");


mobileMenu.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");


    const icon =
        mobileMenu.querySelector("i");


    if (navLinks.classList.contains("mobile-open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

            const icon =
                mobileMenu.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* ==================================================
   FOOTER YEAR
================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* ==================================================
   MOUSE PARALLAX FOR HERO GRAPHIC
================================================== */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();


            const x =
                (event.clientX - rect.left)
                / rect.width
                - 0.5;


            const y =
                (event.clientY - rect.top)
                / rect.height
                - 0.5;


            const card =
                heroVisual.querySelector(
                    ".main-card"
                );


            card.style.transform =
                `perspective(1000px)
                 rotateY(${x * 5}deg)
                 rotateX(${y * -5}deg)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            const card =
                heroVisual.querySelector(
                    ".main-card"
                );


            card.style.transform =
                "perspective(1000px)";

        }
    );

}



/* ==================================================
   PROJECT CARD TILT
================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -2;


            const rotateY =
                ((x - centerX) / centerX) * 2;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});



/* ==================================================
   SMOOTH ANCHOR BEHAVIOR
================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }
        );

    });