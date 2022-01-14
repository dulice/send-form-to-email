const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var templateParams = {
        to_name : document.getElementById("user-name").value,
        from_name : document.getElementById("email").value,
        message : document.getElementById("message").value
    };
    
    emailjs.send("service_6gota6z", "template_1c3t0t6", templateParams, "user_6v2EHsRi6FhNuoSuFiWvb")
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
    });
})