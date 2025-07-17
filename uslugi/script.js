document.addEventListener("DOMContentLoaded", () => {
    const galleries = document.querySelectorAll(".gallery");

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll("img");
        let currentIndex = 0;

        const updateGallery = () => {
            images.forEach((img, index) => {
                img.style.display = index === currentIndex ? "block" : "none";
            });
        };

        gallery.querySelector(".prev").addEventListener("click", () => {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            updateGallery();
        });

        gallery.querySelector(".next").addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery();
        });

        updateGallery(); // Initialize the gallery
    });
    
    // Mobile menu functionality
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    // Zamknięcie menu po kliknięciu linku
    const navLinks = document.querySelectorAll(".nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("active")) {
                nav.classList.remove("active");
            }
        });
    });
});
