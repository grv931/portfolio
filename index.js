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

function getSocialIconHtml(soc) {
  const iconName = soc.icon.toLowerCase();
  if (iconName === "logo-leetcode") {
    return `<svg class="socials-icons custom-svg" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`;
  } else if (iconName === "logo-kaggle") {
    return `<svg class="socials-icons custom-svg" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><title>Kaggle</title><path d="M106,103c-.06,.3-.3,.4-.8,.4h-8c-.5,0-.9-.2-1.3-.6L82.746,86.028l-3.655,3.477v13c0,.6-.3,.9-.9,.9h-6.152c-.6,0-.9-.3-.9-.9V44c0-.6,.3-.9,.9-.9h6.1c.6,0,.9,.3,.9,.9v36l15.692-15.87c.416-.415,.832-.624,1.248-.624h8.204c.356,0,.593,.149,.713,.445c.119,.4,.1,.6-.1,.8L88,81C106,102,106,103,106,103" transform="scale(5.5,5.5) translate(-40,-30)"/></svg>`;
  }
  else {
    return `<ion-icon class="socials-icons" name="${soc.icon}"></ion-icon>`;
  }
}

socialList.innerHTML = portfolioData.profile.socials.map(soc => `
  <li class="social-item">
    <a target="_blank" href="${soc.url}" class="social-link" aria-label="${soc.name}">
      ${getSocialIconHtml(soc)}
    </a>
  </li>
`).join("");

// Populate biography paragraphs
const bioContainer = document.getElementById("bio-container");
bioContainer.innerHTML = portfolioData.profile.bio.map(p => `<p>${p}</p>`).join("");


// Helper for project action button icons
function getProjectLinkIcon(type) {
  if (type === "github") {
    return `<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;
  } else if (type === "kaggle") {
    return `<svg viewBox="0 0 512 512" width="13" height="13" fill="currentColor"><path d="M106,103c-.06,.3-.3,.4-.8,.4h-8c-.5,0-.9-.2-1.3-.6L82.746,86.028l-3.655,3.477v13c0,.6-.3,.9-.9,.9h-6.152c-.6,0-.9-.3-.9-.9V44c0-.6,.3-.9,.9-.9h6.1c.6,0,.9,.3,.9,.9v36l15.692-15.87c.416-.415,.832-.624,1.248-.624h8.204c.356,0,.593,.149,.713,.445c.119,.4,.1,.6-.1,.8L88,81C106,102,106,103,106,103" transform="scale(5.5,5.5) translate(-40,-30)"/></svg>`;
  } else if (type === "notebook") {
    return `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
  } else if (type === "paper") {
    return `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
}

// Populate horizontal projects list
const projectsList = document.getElementById("projects-list");
projectsList.innerHTML = portfolioData.projects.map(proj => `
  <li class="project-horizontal-card">
    <div class="project-card-header">
      <div class="project-title-group">
        <div class="project-icon-box">
          <img src="${proj.icon}" alt="${proj.title} icon" width="38" height="38">
        </div>
        <div class="project-title-content">
          <div class="project-badge-row">
            <span class="project-category-badge">${proj.category}</span>
            ${proj.badge ? `<span class="project-type-pill">${proj.badge}</span>` : ""}
          </div>
          <h4 class="h4 project-card-title">${proj.title}</h4>
        </div>
      </div>
      <div class="project-actions">
        ${(proj.links || []).map(link => `
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-action-btn ${link.type}-btn" title="${link.label}">
            ${getProjectLinkIcon(link.type)}
            <span>${link.label}</span>
            <svg class="external-arrow" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17l10-10M17 17V7H7"/>
            </svg>
          </a>
        `).join("")}
      </div>
    </div>

    <div class="project-card-body">
      <p class="project-overview-text">${proj.description}</p>
      ${proj.highlights && proj.highlights.length > 0 ? `
        <ul class="project-bullets-list">
          ${proj.highlights.map(h => `
            <li class="project-bullet-item">
              <span class="bullet-indicator">▹</span>
              <span class="bullet-text">${h}</span>
            </li>
          `).join("")}
        </ul>
      ` : ""}
    </div>

    <div class="project-card-footer">
      <div class="project-tech-pills">
        ${proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}
      </div>
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