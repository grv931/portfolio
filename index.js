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
  } else if (iconName === "logo-credly") {
    return `<svg class="socials-icons custom-svg" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><title>Credly</title><path d="M23.8 13.154a.299.299 0 0 0-.101-.024.407.407 0 0 0-.202.048c-.06.028-.092.08-.127.136-.087.128-.15.268-.226.4-.107.187-.246.351-.38.515-.135.156-.286.291-.424.44-.028.027-.072.043-.107.027-.028-.016-.036-.056-.032-.088.04-.38.075-.763.123-1.138.02-.172.043-.336.063-.512.028-.247.056-.487.087-.735l.234-1.824c.02-.128.032-.372-.135-.52a.446.446 0 0 0-.233-.116.46.46 0 0 0-.254.06c-.226.16-.297.504-.365.76-.142.603-.178 1.241-.471 1.804a1.772 1.772 0 0 1-.202.316.668.668 0 0 1-.186.18.332.332 0 0 1-.246.051.365.365 0 0 1-.238-.207.871.87 0 0 1-.063-.324 4.499 4.499 0 0 1 .24-1.585c.045-.132.089-.252.104-.383.028-.156.028-.38-.114-.516-.131-.128-.337-.18-.504-.128-.194.056-.31.244-.372.392-.198.463-.25.95-.317 1.446-.044.327-.127.64-.293.926a2.717 2.717 0 0 1-.603.72c-.118.087-.222.123-.328.107a.376.376 0 0 1-.278-.208.875.875 0 0 1-.095-.315 3.361 3.36 0 0 1-.036-.616c.004-.223 0-.44.044-.658.075-.39.678-1.937.808-2.345.135-.407.262-.823.353-1.246.08-.38.123-.767.11-1.15-.007-.277-.07-.576-.288-.736a.611.61 0 0 0-.603-.048.968.968 0 0 0-.455.428 2.53 2.53 0 0 0-.226.59 12.01 12.01 0 0 0-.266 1.29c-.071.429-.138.848-.206 1.268-.06.355-.206 1.614-.261 1.88-.06.272-.175.54-.301.787-.131.268-.258.536-.408.791a.694.694 0 0 1-.175.224c-.08.06-.182.088-.27.048-.102-.048-.146-.176-.166-.292-.075-.435-.012-.875.072-1.302.083-.431.44-2.4.519-2.851.099-.532.24-1.05.285-1.59.028-.388.09-.88-.202-1.187-.115-.136-.31-.16-.44-.136-.174.036-.31.176-.388.296-.1.128-.186.28-.258.467-.115.284-.186.615-.261.91l-.032.129c-.083.383-.143.77-.186 1.162a16.95 16.948 0 0 0-.06.632c-.008.1-.016.203-.027.307 0 .08.007.168-.028.244a.304.304 0 0 1-.052.068c-.08.072-.202.06-.31.056-.557-.016-1.045.3-1.35.755-.18.252-.281.542-.39.834-.01.048-.034.1-.054.152-.051.143-.13.327-.222.511a3.037 3.037 0 0 1-.317.46 3.285 3.285 0 0 1-.384.41 1.123 1.123 0 0 1-.515.26c-.174.04-.384-.043-.543-.203a.916.916 0 0 1-.206-.54c-.004-.055-.004-.115.028-.163.05-.068.146-.072.23-.076a1.623 1.623 0 0 0 1.375-1.015c.138-.34.178-.698.122-1.046a1.193 1.193 0 0 0-.19-.48.9.9 0 0 0-.396-.323c-.293-.14-.658-.127-1.01.004-.575.232-.951.74-1.134 1.562l-.02.088c-.114.487-.23 1-.582 1.354-.127.12-.261.163-.368.143-.044-.004-.08-.04-.103-.075-.096-.16.003-.532.15-1a4.1 4.1 0 0 0 .1-.366.925.925 0 0 0-.108-.495.783.783 0 0 0-.372-.324c-.143-.064-.31-.06-.468-.06h-.047c-.044 0-.103 0-.151-.012a.215.215 0 0 1-.147-.127.485.485 0 0 1 .016-.232c.004-.02.012-.048.016-.072a.368.368 0 0 0-.162-.412.509.509 0 0 0-.468-.036.768.768 0 0 0-.364.348.769.769 0 0 0-.103.48c.04.13.07.32.043.475-.055.28-.222.51-.384.74-.04.05-.072.106-.107.16a4.96 4.96 0 0 1-.706.825c-.372.335-.804.575-1.232.67-.745.165-1.506-.06-1.91-.734-.222-.38-.32-.827-.348-1.266a5.425 5.425 0 0 1 .424-2.516c.328-.76.816-1.52 1.715-1.614.353-.04.753.083.912.4.115.23.075.506 0 .75-.072.244-.175.49-.18.75-.003.26.124.54.37.616.238.072.495-.08.634-.29.138-.21.186-.46.245-.704a6.282 6.281 0 0 1 .662-1.634c.139-.236.297-.488.254-.76a.543.543 0 0 0-.373-.415.543.543 0 0 0-.535.144c-.134.148-.206.371-.387.43-.17.06-.35-.055-.507-.134-.6-.32-1.336-.312-1.963-.048-.634.25-1.146.735-1.526 1.294C.462 8.53.098 9.508.022 10.48c-.027.34-.031.695 0 1.038.036.46.1.854.214 1.206.139.423.317.79.547 1.094.266.34.587.6.94.747.372.148.784.22 1.192.208a3.172 3.172 0 0 0 1.177-.283 4.29 4.29 0 0 0 1.026-.68c.309-.26.594-.559.84-.89.162-.224.309-.46.44-.708a4.83 4.83 0 0 0 .178-.383c.044-.104.087-.215.202-.26.056-.043.15-.02.202.013.064.04.115.075.135.135.048.116.02.232-.004.332v.012c-.028.1-.055.203-.091.303-.14.424-.238.811-.16 1.195.045.207.128.387.25.527a.84.84 0 0 0 .504.264c.246.04.51-.028.725-.132.143-.068.278-.156.397-.26.06-.06.122-.12.174-.184.044-.06.087-.147.178-.143a.15.15 0 0 1 .107.064c.028.031.04.071.06.115.23.52.776.84 1.335.84h.07c.27 0 .556-.093.79-.22.27-.14.48-.348.7-.552.02-.016.045-.04.073-.044.035-.008.07.012.099.044a.26.26 0 0 1 .047.1c.135.34.46.6.824.66a1.1 1.1 0 0 0 .99-.356c.056-.06.104-.128.167-.176.064-.044.15-.076.222-.044.107.04.135.164.182.268.107.235.357.371.615.375.289 0 .554-.148.764-.34.195-.183.353-.399.516-.61a.328.328 0 0 1 .106-.096c.04-.024.096-.028.13 0 .033.024.045.06.06.091.163.4.587.652 1.01.648.417-.004.809-.224 1.103-.516.095-.092.194-.2.32-.21.14-.017.207.114.254.22.072.142.115.238.25.338.158.116.36.152.547.1.17-.04.34-.156.47-.316.072-.088.112-.204.19-.284.092-.087.132.028.136.1.016.116.016.236.008.352-.016.236-.052.471-.08.703-.011.068-.02.136-.063.188-.06.068-.166.08-.253.064a2.898 2.898 0 0 0-.321-.028l-.14-.016c-.201-.012-.4-.036-.61-.044h-.185c-.404 0-.733.048-1.03.16-.48.187-.852.57-1.003 1.018a1.305 1.305 0 0 0-.052.64c.04.203.13.403.282.587.265.315.68.515 1.149.543.408.02.852-.064 1.292-.26.848-.367 1.482-1.094 1.696-1.95 0-.02.01-.039.023-.043.298-.104.57-.248.813-.428.245-.187.467-.399.65-.643.09-.12.174-.243.253-.37.07-.125.13-.257.202-.38a.906.906 0 0 0 .13-.316.411.411 0 0 0-.05-.328.257.257 0 0 0-.135-.124m-13.68-1.63c.017-.071.045-.14.06-.206a1.9 1.9 0 0 1 .262-.504c.04-.048.08-.1.135-.136a.246.246 0 0 1 .186-.048c.107.02.183.128.202.236.032.18-.04.396-.114.555a1.097 1.097 0 0 1-.31.415c-.06.044-.114.088-.178.116-.028.008-.063.028-.115.028h-.016c-.055 0-.114-.028-.126-.088a.827.827 0 0 1 .015-.367m4.308-.184c-.004.072-.024.148-.028.223a4.91 4.91 0 0 0 0 .779c.012.152.047.3-.016.444a1.069 1.069 0 0 1-.567.643.555.555 0 0 1-.245.056c-.02 0-.04-.004-.06-.004-.12 0-.214-.092-.265-.18a.871.87 0 0 1-.1-.272 2.129 2.129 0 0 1 .072-1.122c.08-.22.202-.435.38-.594a.874.874 0 0 1 .563-.24.31.31 0 0 1 .206.064c.04.044.06.104.056.164a.05.05 0 0 1 .004.04m6.43 4.653c-.015.044-.06.104-.08.14-.042.08-.102.163-.161.235a2.562 2.562 0 0 1-.317.304c-.238.18-.503.311-.777.387a2.025 2.025 0 0 1-.487.072h-.04a.795.795 0 0 1-.515-.18.433.433 0 0 1-.158-.25.537.537 0 0 1 .047-.305.776.776 0 0 1 .38-.383c.326-.16.682-.176 1.019-.16.139.004.265.012.4.02.107.004.218.012.325.024.056 0 .115.004.17.012.044.004.092-.004.135.008.06.004.068.036.06.076"/></svg>`;
  } else {
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