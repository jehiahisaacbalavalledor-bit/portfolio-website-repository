class scriptClass {
    toggleSidebar() {
        const toggle = document.querySelector(".sidebar");
        toggle.classList.toggle("active")

        document.addEventListener("click", function (event) {
            const sidebar = document.querySelector(".sidebar");
            const hamburger = document.querySelector("#hamburger-icon");

            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideSidebar && !isClickOnHamburger) {
                sidebar.classList.remove("active");
            }
        });
    }

    footerYear() {
        const year = new Date().getFullYear();
        document.getElementById("footer-year").textContent = year;
    }

    greetMethod() {
        const words = ["Welcome!", "Let's Work Together!", "Let's Build Projects!", "Hello!"];
        let i = 0;

        const el = document.getElementById("greetings");

        el.textContent = words[3];
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";

        setInterval(() => {
            el.style.transform = "translateY(-10px)";
            el.style.opacity = 0;

            setTimeout(() => {
                el.textContent = words[i];
                el.style.transform = "translateY(0)";
                el.style.opacity = 1;

                i = (i + 1) % words.length;
            }, 1000);

        }, 3000);
    }

    toggleScrollHeader() {
        const header = document.getElementById("header");

        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // scrolling down → hide
                header.classList.add("hide");
            } else {
                // scrolling up → show
                header.classList.remove("hide");
            }

            lastScrollY = currentScrollY;
        });
    }

    contentAnimation() {
        const image = document.getElementById("image");
        const leftText = document.getElementById("left-text");
        document.querySelector(".image").classList.add("show");
        document.querySelector(".left-text").classList.add("show");
        document.querySelector(".primary-btn").classList.add("show");
        document.querySelector(".secondary-btn").classList.add("show");
    }
}

const run = new scriptClass();
run.footerYear();
run.toggleScrollHeader();

document.addEventListener("DOMContentLoaded", () => {
    run.greetMethod();
});

document.addEventListener("DOMContentLoaded", () => {
    run.contentAnimation();
});