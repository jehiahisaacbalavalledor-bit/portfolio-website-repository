class scriptClass {
    toggleSidebar() {
        const toggle = document.querySelector(".sidebar");
        toggle.classList.toggle("active")
    }

    footerYear() {
        const year = new Date().getFullYear();
        document.getElementById("footer-year").textContent = year;
    }
}

const run = new scriptClass();
run.footerYear();