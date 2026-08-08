document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const mobile = document.getElementById("mobile");
    const nameInput = document.getElementById("name");
    const city = document.getElementById("city");

    // Only numbers allowed (0-9)
    mobile.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");

        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });

    // Only numbers allowed (0-9)
mobile.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");

    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

// Full Name - only alphabets
nameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z ]/g, "");
});

// City - only alphabets
city.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z ]/g, "");
});



    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let mobile = document.getElementById("mobile").value.trim();

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let mobilePattern = /^[0-9]{10}$/;
      

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!mobilePattern.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        alert("✅ Thank You! Your message has been submitted successfully.");

        form.reset();
    });

});

// Degree Search
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    const cards = document.querySelectorAll(".degree-card");

    searchInput.addEventListener("keyup", function () {

        let searchValue = searchInput.value.toLowerCase();

        cards.forEach(function(card) {

            let degreeName = card.querySelector("h2").textContent.toLowerCase();

            if (degreeName.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });


    });

}
