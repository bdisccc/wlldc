const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');
const thankYouPopup = document.getElementById("thankYouPopup");

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

        const userSubject = formData.get("subject");

        formData.set(
            "subject",
            `WLL Design & Construction Mail ${userSubject}`
        );

    //formData.append("access_key", "9759c1ca-90e2-4850-b66f-9f0cb8c090ba");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {

            // SHOW THANK YOU POPUP
            thankYouPopup.classList.add("show");

            // RESET FORM
            form.reset();

        } else {

            alert("Error: " + data.message);

        }

    } catch (error) {

        alert("Something went wrong. Please try again.");

    } finally {

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

    }

});

function closeThankYou() {

    thankYouPopup.classList.remove("show");

}