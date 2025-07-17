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

    // Improved smooth scroll to sections
    const navLinks = document.querySelectorAll(".nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            
            // Only prevent default and do smooth scroll for internal links
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.getElementById(href.substring(1));
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
            // External links will work normally
        });
    });

    // Mobile menu functionality
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Close mobile menu after clicking a link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const flights = [
        { flightNumber: "LO123", airport: "Warszawa", airline: "LOT", departureTime: "10:30", status: "Odlot" },
        { flightNumber: "LH456", airport: "Berlin", airline: "Lufthansa", departureTime: "12:00", status: "Opóźniony" },
        { flightNumber: "AF789", airport: "Paryż", airline: "Air France", departureTime: "14:45", status: "Planowany" },
        { flightNumber: "BA101", airport: "Londyn", airline: "British Airways", departureTime: "16:00", status: "Odlot" }
    ];

    const searchInput = document.getElementById("flight-search");
    const suggestionsList = document.getElementById("search-suggestions");

    function showSuggestions(query) {
        const filteredFlights = flights.filter(flight =>
            flight.flightNumber.toLowerCase().includes(query.toLowerCase())
        );

        suggestionsList.innerHTML = ""; //czyszczenie poprzednich wynikow

        if (filteredFlights.length > 0) {
            filteredFlights.forEach(flight => {
                const suggestionItem = document.createElement("li");
				
                suggestionItem.innerHTML = `
                <span class="flight-number">${flight.flightNumber}</span>
                <span class="details">${flight.airport} (${flight.airline})</span>
                <span class="status">${flight.status}</span>
            `;
				
                suggestionItem.addEventListener("click", () => {
                    localStorage.setItem("selectedFlight", JSON.stringify(flight));
                    window.location.href = "../odloty/departures.html";
                });
                suggestionsList.appendChild(suggestionItem);
            });
        } else {
            const noResultsItem = document.createElement("li");
            noResultsItem.textContent = "Brak wyników";
            noResultsItem.classList.add("no-results");
            suggestionsList.appendChild(noResultsItem);
        }
    }

    searchInput.addEventListener("input", (event) => {
        const query = event.target.value.trim();
        if (query) {
            showSuggestions(query);
        } else {
            suggestionsList.innerHTML = "";
        }
    });
});
