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

        el.textContent = words[3]; // This greets "Hello!" first
        el.style.opacity = 1; // This makes the opacity of the greeting totally visible
        el.style.transform = "translateY(0)"; // This makes the text appear immediately unhidden

        setInterval(() => { // This sets the interval timing for each greeting showing up. Ex: "Welcome!" shows up for 3 seconds
            el.style.transform = "translateY(-10px)";
            el.style.opacity = 0;

            setTimeout(() => { // This sets the interval for each greeting to show up. Ex: "Hello!" after 1 second, "Welcome!"
                el.textContent = words[i];
                el.style.transform = "translateY(0)";
                el.style.opacity = 1;

                i = (i + 1) % words.length;
            }, 1000); // 1000ms = 1 second

        }, 3000); // 3000ms = 3 seconds
    }

    toggleScrollHeader() {
        const header = document.getElementById("header");

        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => { // This listens for an event of scrolling
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

    contentAnimation() { // These activate the CSS animations if the hero page loads up
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

document.addEventListener("DOMContentLoaded", () => { // DOMContentLoaded event listener is used here to activate the animations when the website loads up immediately
    run.greetMethod();
});

document.addEventListener("DOMContentLoaded", () => {
    run.contentAnimation();
});