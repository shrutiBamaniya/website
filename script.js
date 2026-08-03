document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const mobile = document.getElementById("mobile");

    // Only numbers allowed (0-9)
    mobile.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");

        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
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