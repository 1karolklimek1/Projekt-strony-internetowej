document.addEventListener("DOMContentLoaded", () => {
    // Gallery image rotation
    const images = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg"];
    let currentIndex = 0;
    const galleryImage = document.getElementById("gallery-image");

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        galleryImage.src = images[currentIndex];
    }, 2000);

    // Search functionality for the hero section
    const searchInput = document.querySelector(".hero input");
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            alert(`Searching for flights: ${searchInput.value}`);
        }
    });

    // Smooth scroll to sections
    const navLinks = document.querySelectorAll(".nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

/*dodane*/
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    // Obsługa kliknięcia przycisku hamburgera
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Opcjonalne: Zamknij menu po kliknięciu w link
    const navLinks = document.querySelectorAll(".nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});
