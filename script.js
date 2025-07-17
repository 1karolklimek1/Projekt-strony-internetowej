document.addEventListener("DOMContentLoaded", () => {
    // Obracanie galerii obrazów (jeśli galeria istnieje)
    const galleryImage = document.getElementById("gallery-image");
    if (galleryImage) {
        const images = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg"];
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            galleryImage.src = images[currentIndex];
        }, 2000);
    }

    // Funkcjonalność wyszukiwania lotów (jeśli wyszukiwarka istnieje)
    const searchInput = document.getElementById("flight-search");
    const suggestionsList = document.getElementById("search-suggestions");
    const flights = [
        { flightNumber: "QR123", airport: "Doha", airline: "Qatar Airways", departureTime: "05:30", date: "2025-01-25", status: "Planowany" },
        { flightNumber: "KL987", airport: "Amsterdam", airline: "KLM", departureTime: "06:30", date: "2025-01-25", status: "Opóźniony" },
        { flightNumber: "VY290", airport: "Barcelona", airline: "Vueling", departureTime: "09:00", date: "2025-01-25", status: "Planowany" },
        { flightNumber: "AC145", airport: "Toronto", airline: "Air Canada", departureTime: "09:50", date: "2025-01-25", status: "Opóźniony" },
        { flightNumber: "LO123", airport: "Warszawa", airline: "LOT", departureTime: "10:30", date: "2025-01-25", status: "Odlot" },
        { flightNumber: "LH223", airport: "Monachium", airline: "Lufthansa", departureTime: "10:15", date: "2025-01-25", status: "Opóźniony" },
        { flightNumber: "AA564", airport: "Chicago", airline: "American Airlines", departureTime: "11:25", date: "2025-01-25", status: "Planowany" },
        { flightNumber: "LH456", airport: "Berlin", airline: "Lufthansa", departureTime: "12:00", date: "2025-01-25", status: "Opóźniony" },
        { flightNumber: "OS234", airport: "Wiedeń", airline: "Austrian Airlines", departureTime: "12:45", date: "2025-01-25", status: "Odlot" },
        { flightNumber: "LH333", airport: "Frankfurt", airline: "Lufthansa", departureTime: "13:15", date: "2025-01-25", status: "Odlot" },
        { flightNumber: "AZ501", airport: "Rzym", airline: "Alitalia", departureTime: "13:35", date: "2025-01-25", status: "Odlot" },
        { flightNumber: "A340", airport: "Ateny", airline: "Aegean Airlines", departureTime: "14:10", date: "2025-01-25", status: "Odlot" },
        { flightNumber: "AF789", airport: "Paryż", airline: "Air France", departureTime: "14:45", date: "2025-01-25", status: "Planowany" },
        { flightNumber: "IB302", airport: "Madryt", airline: "Iberia", departureTime: "15:30", date: "2025-01-25", status: "Odlot" },
        { flightNumber: "SAS345", airport: "Kopenhaga", airline: "SAS", departureTime: "16:50", date: "2025-01-25", status: "Planowany" },
        { flightNumber: "EK454", airport: "Dubai", airline: "Emirates", departureTime: "17:25", date: "2025-01-25", status: "Odlot" },
        { flightNumber: "NH217", airport: "Tokyo", airline: "ANA", departureTime: "18:55", date: "2025-01-25", status: "Planowany" },
        { flightNumber: "QF12", airport: "Sydney", airline: "Qantas", departureTime: "21:10", date: "2025-01-25", status: "Planowany" },
        { flightNumber: "QF11", airport: "Sydney", airline: "Qantas", departureTime: "22:10", date: "2025-01-25", status: "Odlot" },
        { flightNumber: "CX899", airport: "Hong Kong", airline: "Cathay Pacific", departureTime: "23:15", date: "2025-01-25", status: "Odlot" }
    ];

    if (searchInput && suggestionsList) {
        searchInput.addEventListener("input", (event) => {
            const query = event.target.value.trim().toLowerCase();
            suggestionsList.innerHTML = ""; // Wyczyść poprzednie wyniki

            // Filtruj loty tylko wtedy, gdy pierwszy znak w numerze lotu pasuje
            const filteredFlights = flights.filter(flight =>
                flight.flightNumber.toLowerCase().startsWith(query)
            );

            if (query === "") {
                suggestionsList.innerHTML = ""; // Usuń listę sugestii, jeśli pole jest puste
            } else if (filteredFlights.length === 0) {
                // Jeśli brak wyników, pokaż napis "Brak wyników"
                const noResultsItem = document.createElement("li");
                noResultsItem.textContent = "Brak wyników";
                noResultsItem.classList.add("no-results"); // Możesz dodać klasę dla stylizacji
                suggestionsList.appendChild(noResultsItem);
            } else {
                // Generuj listę wyników
                filteredFlights.forEach(flight => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        <span class="flight-number">${flight.flightNumber}</span>
                        <span class="details">${flight.airport} (${flight.airline})</span>
                        <span class="status">${flight.status}</span>
                    `;
                    li.addEventListener("click", () => {
                        localStorage.setItem("selectedFlight", JSON.stringify(flight));
                        localStorage.setItem("redirectedFrom", "index");
                        window.location.href = "../odloty/departures.html";
                    });
                    suggestionsList.appendChild(li);
                });
            }
        });

        // Wyczyszczenie listy sugestii po opuszczeniu pola wyszukiwania
        searchInput.addEventListener("blur", () => {
            setTimeout(() => {
                suggestionsList.innerHTML = "";
            }, 100); // Małe opóźnienie, aby umożliwić kliknięcie na sugestię
        });

        // Wyłączanie autouzupełniania przeglądarki
        searchInput.setAttribute("autocomplete", "off");
    }

    // Podświetlenie lotu na stronie departures.html
    const selectedFlight = JSON.parse(localStorage.getItem("selectedFlight"));
    const redirectedFrom = localStorage.getItem("redirectedFrom");
    if (selectedFlight && redirectedFrom === "index") {
        const tableRows = document.querySelectorAll(".departures-table tbody tr");
        tableRows.forEach(row => {
            const flightNumberCell = row.cells[1]; // Druga kolumna zawiera numer lotu
            if (flightNumberCell && flightNumberCell.textContent === selectedFlight.flightNumber) {
                row.classList.add("highlight");
                row.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
        localStorage.removeItem("redirectedFrom"); // Usuń znacznik, aby zapobiec ponownemu podświetlaniu
    }

    // Funkcjonalność menu mobilnego
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
