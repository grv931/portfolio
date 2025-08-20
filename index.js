// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }

    });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }

    });
}



const messageText = document.getElementById("message-text");
const messageIcon = document.getElementById("message-icon");
const messageBtn = document.getElementById("message-btn");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    messageBtn.disabled = true;
    messageText.innerText = "Sending message";
    messageIcon.setAttribute("name", "hourglass");

    // Gather form data
    const formData = new FormData(this);
    const payload = {
        service_id: formData.get("service_id"),
        template_id: formData.get("template_id"),
        user_id: formData.get("user_id"),
        template_params: {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message")
        }
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (response.ok) {
                messageText.innerText = "Message sent successfully";
                messageIcon.setAttribute("name", "checkbox");
                setTimeout(() => {
                    messageText.innerText = "Send Message";
                    messageIcon.setAttribute("name", "paper-plane");
                    messageBtn.disabled = false;
                }, 3000);
            }
        })
        .catch(error => {
            console.log("An error occurred: " + error.message);
        });
});


const pageLoaded = () => {
    // Remove loader
    const loader = document.getElementById('loader_block');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 300);
}
window.addEventListener('load', pageLoaded);