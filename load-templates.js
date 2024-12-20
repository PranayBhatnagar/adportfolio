// Function to load an external HTML file into an element
function loadTemplate(url, elementId) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error loading ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then((html) => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch((error) => console.error(error));
}

// Load header and footer templates
document.addEventListener("DOMContentLoaded", () => {
    loadTemplate("header.html", "header-placeholder");
    loadTemplate("footer.html", "footer-placeholder");
});
