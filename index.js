document.addEventListener("DOMContentLoaded", function () {
    const profileForm = document.getElementById("profile-form");
    const nameInput = document.getElementById("name");
    const pictureInput = document.getElementById("profile-picture");
    const bioInput = document.getElementById("bio");

    const studentName = document.getElementById("student-name");
    const profilePic = document.querySelector(".profile-pic");
    const bioSection = document.querySelector(".about-section p");

    profileForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents page reload

        // Update name
        studentName.textContent = nameInput.value;

        // Update profile picture
        profilePic.src = pictureInput.value;

        // Update bio
        bioSection.textContent = bioInput.value;
    });

    const contactForm = document.getElementById("contact-form");
    const responseMsg = document.getElementById("response");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                responseMsg.textContent = "Thank you! Your message has been sent successfully.";
                responseMsg.style.color = "limegreen";
                contactForm.reset();
            } else {
                responseMsg.textContent = "Oops! Something went wrong. Please try again.";
                responseMsg.style.color = "red";
            }
        })
        .catch(() => {
            responseMsg.textContent = "Network error. Please try again.";
            responseMsg.style.color = "red";
        });
    });
});