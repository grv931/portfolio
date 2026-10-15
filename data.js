const portfolioData = {
  profile: {
    name: "Kumar Gaurav",
    title: "AI/ML Engineer",
    avatar: "./images/dp.jpg",
    email: "kr.gaurav931@gmail.com",
    phone: "+91 8210765395",
    location: "Bhubaneswar, Odisha",
    bio: [
      "I am an AI/ML Engineer and final year B.Tech student in Electrical and Electronics Engineering at IIIT Bhubaneswar (CGPA: 8.3/10), concurrently pursuing a Bachelor of Science in Data Science and Applications from IIT Madras.",
      "With a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning, and Full-Stack Engineering, I specialize in architecting scalable distributed platforms, implementing computer vision & NLP pipelines, and applying data-driven optimization to solve complex engineering challenges.",
      "Recently, I qualified the prestigious GATE 2026 examination in Data Science and Artificial Intelligence (DA) and co-authored the conference research paper, 'Enhancing Urban EV Charging Networks: A Case Study of Bhubaneswar', leveraging spatial GIS data, Gaussian Mixture Models (GMM), and Particle Swarm Optimization (PSO)."
    ],
    socials: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/grv931/",
        icon: "logo-linkedin"
      },
      {
        name: "Leetcode",
        url: "https://leetcode.com/grv931",
        icon: "logo-leetcode"
      },
      {
        name: "Kaggle",
        url: "https://www.kaggle.com/kumargaurav931",
        icon: "logo-kaggle"
      },
      {
        name: "github",
        url: "https://github.com/grv931",
        icon: "logo-github"
      }
    ]
  },


  projects: [
    {
      id: "placement-portal",
      title: "Placement Portal Application V2",
      category: "Full-Stack Web Platform",
      badge: "Full-Stack",
      icon: "./images/SkillFleet.svg",
      description: "A decoupled campus recruitment platform connecting students, companies, and administration through a unified application tracking system.",
      highlights: [
        "Engineered a decoupled full-stack campus recruitment platform connecting students, companies, and administration through a unified application tracking system.",
        "Implemented secure role-based workflows using stateless JWT authentication, managing company approvals, placement drives, and student selection statuses.",
        "Integrated Redis for API route caching and Celery task queues to automate background processes, including asynchronous CSV data exports and automated report generation."
      ],
      tech: ["Flask", "Vue.js", "SQLite", "Redis", "Celery", "JWT", "REST API"],
      links: [
        { type: "github", label: "View Code", url: "https://github.com/grv931/SkillFleet" }
      ]
    },
    {
      id: "comment-classification",
      title: "Comment Category Classification",
      category: "NLP & Machine Learning",
      badge: "ML & Analytics",
      icon: "./images/CommentPrediction.svg",
      description: "Intelligent multimodal classification pipeline combining textual content, user-engagement signals, and system metadata for comment categorization.",
      highlights: [
        "Analyzed multimodal data combining textual content, user-engagement signals, and system metadata to identify patterns in comment categorization.",
        "Performed exploratory data analysis and created visualizations to uncover trends and relationships across textual and user-engagement features.",
        "Engineered numerical, categorical, and interaction features and tuned classification models using robust validation strategies."
      ],
      tech: ["Python", "ML", "Data Analysis", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
      links: [
        { type: "github", label: "View Code", url: "https://github.com/grv931/Comment-Category-Prediction" },
        { type: "notebook", label: "Notebook", url: "https://github.com/grv931/Comment-Category-Prediction" }
      ]
    },
    {
      id: "thoracic-pathology",
      title: "Thoracic Pathology Detection Model",
      category: "Computer Vision & Medical AI",
      badge: "Deep Learning",
      icon: "./images/ThoracicPathology.svg",
      description: "Transfer learning diagnostic pipeline trained on 51K+ chest X-ray images to accurately detect and classify 20 distinct thoracic pathologies.",
      highlights: [
        "Built a transfer learning pipeline on 51K+ chest X-ray images to classify 20 thoracic pathologies using DenseNet121 and Keras.",
        "Used class weighting and a custom loss function to address 66% class imbalance and reduce the impact of false negatives in medical diagnosis."
      ],
      tech: ["Python", "ML", "Computer Vision", "PyTorch", "Keras", "DenseNet121", "Medical Imaging"],
      links: [
        { type: "github", label: "View Code", url: "https://github.com/grv931/Thoracic-Pathology-Detection" },
        { type: "kaggle", label: "Kaggle", url: "https://www.kaggle.com/kumargaurav931" }
      ]
    },
    {
      id: "ev-charging-networks",
      title: "Urban EV Charging Networks Optimization",
      category: "Spatial AI & Metaheuristics",
      badge: "Conference Paper",
      icon: "./images/EVCharging.svg",
      description: "Co-authored conference research paper analyzing spatial demand patterns and optimizing urban charging infrastructure placement in Bhubaneswar.",
      highlights: [
        "Co-authored conference paper: 'Enhancing Urban EV Charging Networks: A Case Study of Bhubaneswar' (Accepted June 2026).",
        "Analyzed spatial and demand patterns for EV charging infrastructure using QGIS and clustered charging demand using Gaussian Mixture Models (GMM).",
        "Formulated and implemented Particle Swarm Optimization (PSO) to determine optimal network site locations and power allocation."
      ],
      tech: ["Python", "Spatial Analysis", "QGIS", "Gaussian Mixture Models (GMM)", "Particle Swarm Optimization (PSO)"],
      links: [
        { type: "paper", label: "Research Paper", url: "https://github.com/grv931" }
      ]
    },
    {
      id: "agri-tech-super-res",
      title: "Agri-Tech Image Super-Resolution Model",
      category: "Deep Learning & Precision Agriculture",
      badge: "cGAN Pipeline",
      icon: "./images/AgriTech.svg",
      description: "Conditional GAN image super-resolution model upscaling degraded crop leaf imagery by 4x to restore disease-specific textures.",
      highlights: [
        "Built a cGAN-based image super-resolution pipeline to upscale degraded crop leaf images by 4x to restore disease-specific patterns.",
        "Significantly enhanced structural feature fidelity for downstream plant disease classification under variable field lighting conditions."
      ],
      tech: ["PyTorch", "cGAN", "Deep Learning", "Computer Vision", "Python"],
      links: [
        { type: "github", label: "View Code", url: "https://github.com/grv931/Agri-Tech-Image-Super-Resolution" }
      ]
    },
    {
      id: "developer-portfolio",
      title: "Interactive Developer Portfolio",
      category: "Frontend & UI/UX",
      badge: "Interactive Web",
      icon: "./images/Portfolio.svg",
      description: "Modern, responsive portfolio featuring zero-gravity particle simulation, modular vanilla JavaScript architecture, and embedded PDF viewer.",
      highlights: [
        "Designed and built an interactive developer portfolio featuring dark mode glassmorphism, responsive horizontal project showcase, and dynamic SVG gradients.",
        "Integrated custom zero-gravity particle physics simulation with real-time mouse interaction and in-app resume viewer."
      ],
      tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Canvas 2D", "Responsive Design"],
      links: [
        { type: "github", label: "View Code", url: "https://github.com/grv931/portfolio" }
      ]
    }
  ],

  organizations: [
    {
      name: "IIIT Bhubaneswar",
      role: "B.Tech Student (EEE)",
      logo: "./images/iiitbh.png",
      url: "https://www.iiit-bh.ac.in",
      tooltip: "IIIT Bhubaneswar — B.Tech in Electrical & Electronics Engineering (Undergraduate, 2023–2027)"
    },
    {
      name: "IIT Madras",
      role: "BS Student (Data Science)",
      logo: "./images/iitm.png",
      tooltip: "IIT Madras — BS in Data Science and Applications (Remote, 2023–2027)"
    },
    {
      name: "E-Cell IIIT Bhubaneswar",
      role: "Content & Graphics Lead",
      logo: "./images/ecell.png",
      url: "https://www.linkedin.com/company/e-cell-iiit-bh",
      tooltip: "E-Cell IIIT Bhubaneswar — Content & Graphics Lead (E-Summit 2025)"
    },
    {
      name: "NCC",
      role: "Cadet ('A' & 'B' Cert)",
      logo: "./images/ncc.png",
      tooltip: "NCC (National Cadet Corps) — 'A' & 'B' Certificates (38 Bihar Battalion)"
    },
    {
      name: "SSNL",
      role: "Cadet",
      logo: "./images/ssnl.png",
      tooltip: "Sainik School Nalanda"
    }
  ],

  emailjs: {
    userId: "hqZY_jB_-BBbsDFne",
    serviceId: "default_service",
    templateId: "template_8e5l1za"
  }
};
