document.addEventListener("DOMContentLoaded", () => {
    // Sample destinations (Replace this with a backend API call if needed)
    const destinations = [
        { name: "Paris", description: "The City of Love", price: 1200 },
        { name: "Tokyo", description: "A blend of tradition and modernity", price: 1500 },
        { name: "New York", description: "The city that never sleeps", price: 1300 },
        { name: "Dubai", description: "A luxurious desert city", price: 1400 }
    ];

    const destContainer = document.getElementById("destinations");
    const selectMenu = document.getElementById("destinationSelect");

    // Populate destination cards
    destinations.forEach(dest => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h3>${dest.name}</h3><p>${dest.description}</p><p>Price: $${dest.price}</p>`;
        destContainer.appendChild(card);
        

        // Populate select dropdown
        const option = document.createElement("option");
        option.value = dest.name;
        option.textContent = dest.name;
        selectMenu.appendChild(option);
    });

    // Handle Booking Submission
    document.getElementById("bookingForm").addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const destination = document.getElementById("destinationSelect").value;

        if (!destination) {
            document.getElementById("message").textContent = "Please select a destination!";
            return;
        }

        document.getElementById("message").textContent = `Booking successful for ${name} to ${destination}!`;
    });
});
