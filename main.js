// JavaScript to dynamically link CSS and manage navigation between HTML pages

document.addEventListener("DOMContentLoaded", () => {
    // Object to map HTML files to their respective CSS files
    const pageStyles = {
        "SusScanner.html": "SusScanner.css",
        "Suswhat.html": "Suswhat.css",
        "Suswhy.html": "Suswhy.css",
        "Sushow.html": "Sushow.css",
        "Susmain.html": "Susmain.css",
        "Susfurther.html": "Susfurther.css",
    };

    // Get the current page's filename
    const currentPage = window.location.pathname.split("/").pop();

    // Get the corresponding CSS file
    const cssFile = pageStyles[currentPage];

    // Dynamically load the CSS file if it exists
    if (cssFile) {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = cssFile;
        document.head.appendChild(linkElement);
    }

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll("header ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetPage = link.getAttribute("href");
            window.location.href = targetPage;
        });
    });
});
