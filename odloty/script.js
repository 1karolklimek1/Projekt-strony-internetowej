//podswietlenie wybranego lotu
/*
document.addEventListener("DOMContentLoaded", () => {
        const selectedFlight = JSON.parse(localStorage.getItem("selectedFlight"));
        if (selectedFlight) {
            const tableRows = document.querySelectorAll(".departures-table tbody tr");
            tableRows.forEach(row => {
                const flightNumberCell = row.cells[0];
                if (flightNumberCell && flightNumberCell.textContent === selectedFlight.flightNumber) {
                    row.style.backgroundColor = "#72c1f2";
                    row.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            });
        }
    });


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
*/



document.addEventListener("DOMContentLoaded", () => {
    // Gallery image rotation
    const images = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg"];
    let currentIndex = 0;
    const galleryImage = document.getElementById("gallery-image");
    if(galleryImage){
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            galleryImage.src = images[currentIndex];
        }, 2000);
    }


    // Search functionality for the hero section
    const heroSearchInput = document.querySelector(".hero input");
    heroSearchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            alert(`Searching for flights: ${heroSearchInput.value}`);
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

    // Flight data and search functionality
    const flights = [
        { flightNumber: "LO123", airport: "Warszawa", airline: "LOT", departureTime: "10:30", status: "Odlot" },
        { flightNumber: "LH456", airport: "Berlin", airline: "Lufthansa", departureTime: "12:00", status: "Opóźniony" },
        { flightNumber: "AF789", airport: "Paryż", airline: "Air France", departureTime: "14:45", status: "Planowany" },
        { flightNumber: "UA890", airport: "Nowy Jork", airline: "United Airlines", departureTime: "08:45", status: "Planowany" },
        { flightNumber: "QF11", airport: "Sydney", airline: "Qantas", departureTime: "22:10", status: "Odlot" },
        { flightNumber: "KL987", airport: "Amsterdam", airline: "KLM", departureTime: "06:30", status: "Opóźniony" },
        { flightNumber: "NH217", airport: "Tokyo", airline: "ANA", departureTime: "18:55", status: "Planowany" },
        { flightNumber: "LH333", airport: "Frankfurt", airline: "Lufthansa", departureTime: "13:15", status: "Odlot" },
        { flightNumber: "AA564", airport: "Chicago", airline: "American Airlines", departureTime: "11:25", status: "Planowany" },
        { flightNumber: "AC145", airport: "Toronto", airline: "Air Canada", departureTime: "09:50", status: "Opóźniony" },
        { flightNumber: "IB302", airport: "Madryt", airline: "Iberia", departureTime: "15:30", status: "Odlot" },
        { flightNumber: "DY721", airport: "Oslo", airline: "Norwegian", departureTime: "20:40", status: "Planowany" },
        { flightNumber: "CX899", airport: "Hong Kong", airline: "Cathay Pacific", departureTime: "23:15", status: "Odlot" },
        { flightNumber: "QF12", airport: "Sydney", airline: "Qantas", departureTime: "21:10", status: "Planowany" },
        { flightNumber: "EK454", airport: "Dubai", airline: "Emirates", departureTime: "17:25", status: "Odlot" },
        { flightNumber: "QR123", airport: "Doha", airline: "Qatar Airways", departureTime: "05:30", status: "Planowany" },
        { flightNumber: "OS234", airport: "Wiedeń", airline: "Austrian Airlines", departureTime: "12:45", status: "Odlot" },
        { flightNumber: "LH223", airport: "Monachium", airline: "Lufthansa", departureTime: "10:15", status: "Opóźniony" },
        { flightNumber: "SAS345", airport: "Kopenhaga", airline: "SAS", departureTime: "16:50", status: "Planowany" },
        { flightNumber: "A340", airport: "Ateny", airline: "Aegean Airlines", departureTime: "14:10", status: "Odlot" },
        { flightNumber: "VY290", airport: "Barcelona", airline: "Vueling", departureTime: "09:00", status: "Planowany" },
        { flightNumber: "AZ501", airport: "Rzym", airline: "Alitalia", departureTime: "13:35", status: "Odlot" }
    ];

    const searchInput = document.getElementById("flight-search");
    const suggestionsList = document.getElementById("search-suggestions");

    function showSuggestions(query) {
        const filteredFlights = flights.filter(flight =>
            flight.flightNumber.toLowerCase().includes(query.toLowerCase())
        );

        suggestionsList.innerHTML = ""; // Clear previous results

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
                //suggestionsList.appendChild(suggestionItem);
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

    // Highlight selected flight on departures page
    const selectedFlight = JSON.parse(localStorage.getItem("selectedFlight"));
    if (selectedFlight && selectedFlight.flightNumber) {
        const tableRows = document.querySelectorAll(".departures-table tbody tr");
        tableRows.forEach(row => {
            const flightNumberCell = row.cells[1]; // Druga kolumna zawiera numer lotu
            if (flightNumberCell && flightNumberCell.textContent === selectedFlight.flightNumber) {
                row.classList.add("highlight");
                row.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    }
});
