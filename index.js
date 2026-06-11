// Element toggle helper
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Sidebar variables & mobile contacts toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// ==========================================
// DYNAMIC DATA RENDERING
// ==========================================

// Populate profile header
document.getElementById("profile-avatar").src = portfolioData.profile.avatar;
document.getElementById("profile-name").textContent = portfolioData.profile.name;
document.getElementById("profile-title").textContent = portfolioData.profile.title;

// Populate contact details
const contactsList = document.getElementById("contacts-list");
const contactItems = [
  { label: "Email", value: portfolioData.profile.email, href: `mailto:${portfolioData.profile.email}`, isLink: true, icon: "send" },
  { label: "Phone", value: portfolioData.profile.phone, href: `tel:${portfolioData.profile.phone.replace(/\s+/g, '')}`, isLink: true, icon: "call" },
  { label: "Location", value: portfolioData.profile.location, isLink: false, icon: "locate" }
];
contactsList.innerHTML = contactItems.map(item => `
  <li class="contact-item">
    <div class="icon-box">
      <ion-icon name="${item.icon}"></ion-icon>
    </div>
    <div class="contact-info">
      <p class="contact-title">${item.label}</p>
      ${item.isLink 
        ? `<a href="${item.href}" class="contact-link contact-small">${item.value}</a>`
        : `<address class="contact-small">${item.value}</address>`
      }
    </div>
  </li>
`).join("");

// Populate socials
const socialList = document.getElementById("social-list");
socialList.innerHTML = portfolioData.profile.socials.map(soc => `
  <li class="social-item">
    <a target="_blank" href="${soc.url}" class="social-link" aria-label="${soc.name}">
      <ion-icon class="socials-icons" name="${soc.icon}"></ion-icon>
    </a>
  </li>
`).join("");

// Populate biography paragraphs
const bioContainer = document.getElementById("bio-container");
bioContainer.innerHTML = portfolioData.profile.bio.map(p => `<p>${p}</p>`).join("");

// Populate projects list
const projectsList = document.getElementById("projects-list");
projectsList.innerHTML = portfolioData.projects.map(proj => `
  <li class="service-item">
    <div class="service-icon-box">
      <img src="${proj.icon}" alt="${proj.title} icon" width="40">
    </div>
    <div class="service-content-box">
      <h4 class="h4 service-item-title">${proj.title}</h4>
      <p class="service-item-text">${proj.description}</p>
      <p class="service-item-text" style="opacity: 0.8; font-size: 12px; margin-top: 4px; font-weight: 300;">
        Made using: ${proj.tech.join(", ")}
      </p>
      ${proj.github 
        ? `<a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-link" style="color: var(--orange-yellow-crayola, #72e2ae); font-size: 13px; display: inline-flex; align-items: center; gap: 4px; margin-top: 8px; font-weight: 500; text-decoration: none;">
            <span>View Code</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
           </a>`
        : ""
      }
    </div>
  </li>
`).join("");

// Populate organizations
const orgsList = document.getElementById("orgs-list");
orgsList.innerHTML = portfolioData.organizations.map(org => `
  <li class="clients-item" title="${org.tooltip}">
    ${org.url 
      ? `<a href="${org.url}" target="_blank" rel="noopener noreferrer">
          <img src="${org.logo}" alt="${org.name} logo">
         </a>`
      : `<img src="${org.logo}" alt="${org.name} logo">`
    }
  </li>
`).join("");

// ==========================================
// NAVIGATION & PAGE TABS
// ==========================================
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        const targetPage = this.textContent.trim().toLowerCase();

        for (let j = 0; j < pages.length; j++) {
            if (targetPage === pages[j].dataset.page) {
                pages[j].classList.add("active");
            } else {
                pages[j].classList.remove("active");
            }
        }

        for (let k = 0; k < navigationLinks.length; k++) {
            if (navigationLinks[k].textContent.trim().toLowerCase() === targetPage) {
                navigationLinks[k].classList.add("active");
            } else {
                navigationLinks[k].classList.remove("active");
            }
        }

        window.scrollTo(0, 0);
    });
}

// ==========================================
// RESUME MODAL PREVIEW OVERLAY
// ==========================================
const resumeBtn = document.getElementById("resume-btn");
const resumeModal = document.getElementById("resume-modal");
const closeModalBtn = document.getElementById("close-modal-btn");

const openResumeModal = () => {
  resumeModal.classList.add("active");
  resumeModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Lock scroll
};

const closeResumeModal = () => {
  resumeModal.classList.remove("active");
  resumeModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Restore scroll
};

resumeBtn.addEventListener("click", openResumeModal);
closeModalBtn.addEventListener("click", closeResumeModal);
resumeModal.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    closeResumeModal();
  }
});

// ==========================================
// CONTACT FORM VALIDATION & EMAILJS
// ==========================================
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
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

    const formData = new FormData(this);
    const payload = {
        service_id: portfolioData.emailjs.serviceId,
        template_id: portfolioData.emailjs.templateId,
        user_id: portfolioData.emailjs.userId,
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
                this.reset(); // clear form inputs on success!
            } else {
                throw new Error("Failed to send message");
            }
        })
        .catch(error => {
            console.error("An error occurred: " + error.message);
            messageText.innerText = "Error sending message";
            messageIcon.setAttribute("name", "alert-circle");
        })
        .finally(() => {
            setTimeout(() => {
                messageText.innerText = "Send Message";
                messageIcon.setAttribute("name", "paper-plane");
                if (form.checkValidity()) {
                    messageBtn.removeAttribute("disabled");
                } else {
                    messageBtn.setAttribute("disabled", "");
                }
            }, 3000);
        });
});

// ==========================================
// PAGE LOADER
// ==========================================
const pageLoaded = () => {
    const loader = document.getElementById('loader_block');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 300);
    }
}
window.addEventListener('load', pageLoaded);