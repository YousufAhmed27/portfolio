// Portfolio Data - Loaded from JSON
let portfolioData = {};

// Theme Management
const themes = ['dark', 'light', 'blue', 'green'];
let currentThemeIndex = 0;

function initTheme() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themeIndex = themes.indexOf(savedTheme);
    if (themeIndex !== -1) {
        currentThemeIndex = themeIndex;
    }
    applyTheme(themes[currentThemeIndex]);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');

    const icons = {
        'dark': 'fa-moon',
        'light': 'fa-sun',
        'blue': 'fa-palette',
        'green': 'fa-leaf'
    };

    icon.className = `fas ${icons[theme] || 'fa-moon'}`;
}

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(themes[currentThemeIndex]);
}

// CV Download
function initCVDownload() {
    const cvButton = document.getElementById('cvDownload');
    if (cvButton) {
        if (portfolioData.cvFile && portfolioData.cvFile.trim() !== '') {
            cvButton.href = "./" + portfolioData.cvFile;
            cvButton.download = portfolioData.cvFile;
            cvButton.target = '_blank';
            cvButton.style.display = 'inline-flex';
            console.log('CV button configured with file:', portfolioData.cvFile);

            // Add click handler for better compatibility
            cvButton.addEventListener('click', (e) => {
                console.log('CV button clicked, file:', portfolioData.cvFile);
            });
        } else {
            cvButton.style.display = 'none';
            console.log('CV button hidden - no CV file specified');
        }
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Load JSON data
async function loadData() {
    try {
        const response = await fetch('data.json');
        portfolioData = await response.json();
        initializePortfolio();
    } catch (error) {
        console.error('Error loading data:', error);
        // Use default data if JSON fails to load
        portfolioData = getDefaultData();
        initializePortfolio();
    }
}

// Default data fallback
function getDefaultData() {
    return {
        name: "Yousuf Gamal Eldeen",
        title: "Medical Student & Developer",
        description: "Medical Student & Software Developer passionate about creating innovative solutions",
        roles: ["Medical Student", "Software Developer", "Problem Solver", "Tech Enthusiast"],
        about: "I'm a medical student with a passion for technology and software development. I believe in the power of combining medical knowledge with technological innovation to create solutions that can improve healthcare and people's lives. When I'm not studying medicine, you'll find me coding, building web applications, and exploring new technologies.",
        social: {
            "github": "https://github.com/YousufAhmed27",
            "linkedin": "https://www.linkedin.com/in/yousuf-gamal-eldeen-6545a3281/",
            "twitter": "",
            "email": "yousufgamal007@gmail.com"
        },
        cvFile: "",
        stats: {
            "Technologies": 15,
            "Years Coding": 3
        },
        projects: [
            {
                title: "Medical Records App",
                description: "A web application for managing patient medical records with secure authentication and data encryption.",
                technologies: ["React", "Node.js", "MongoDB", "Express"],
                image: "fa-hospital",
                liveUrl: "#",
                githubUrl: "#"
            },
            {
                title: "Health Tracker",
                description: "Mobile app for tracking daily health metrics including steps, sleep, and nutrition with AI-powered insights.",
                technologies: ["React Native", "Firebase", "Python"],
                image: "fa-heartbeat",
                liveUrl: "#",
                githubUrl: "#"
            },
            {
                title: "Study Planner",
                description: "Productivity app designed for medical students to organize study schedules and track progress.",
                technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
                image: "fa-book-medical",
                liveUrl: "#",
                githubUrl: "#"
            }
        ],
        skills: {
            "Frontend Development": ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
            "Backend Development": ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL"],
            "Tools & Platforms": ["Git", "GitHub", "VS Code", "Figma", "Docker", "Firebase"],
            "Medical Knowledge": ["Anatomy", "Physiology", "Pharmacology", "Pathology", "Clinical Skills"]
        },
        certificates: {
            "Work & Volunteer": [
                {
                    title: "Medical Volunteer Program",
                    issuer: "Local Hospital",
                    date: "2023",
                    credentialId: "",
                    url: "",
                    image: "certificates/work-volunteer.jpg"
                }
            ],
            "Education": [
                {
                    title: "Medical Degree (In Progress)",
                    issuer: "Cairo University",
                    date: "2020 - Present",
                    credentialId: "",
                    url: "",
                    image: "certificates/medical-degree.jpg"
                }
            ],
            "Technical": [
                {
                    title: "Full Stack Web Development",
                    issuer: "Coursera",
                    date: "2023",
                    credentialId: "ABC123",
                    url: "https://coursera.org/verify/ABC123",
                    image: "certificates/fullstack-webdev.jpg"
                }
            ]
        },
        contact: {
            email: "your.email@example.com",
            phone: "+20 123 456 7890",
            location: "Cairo, Egypt"
        }
    };
}

// Initialize Portfolio with loaded data
function initializePortfolio() {
    updateHeroSection();
    updateAboutSection();
    updateStats();
    updateProjects();
    updateSkills();
    updateCertificates();
    updateContact();
    updateFooter();
    updateSEO();
    // Setup observer after elements are created
    setupObserver();
    // Initialize new features
    initTheme();
    initCVDownload();
    initBackToTop();
}

// Update Hero Section
function updateHeroSection() {
    document.getElementById('heroName').textContent = portfolioData.name;
    document.getElementById('heroDescription').textContent = portfolioData.description;

    // Social Links
    const socialLinks = document.getElementById('socialLinks');
    socialLinks.innerHTML = '';

    if (portfolioData.social.github) {
        socialLinks.innerHTML += `<a href="${portfolioData.social.github}" target="_blank" class="social-link"><i class="fab fa-github"></i></a>`;
    }
    if (portfolioData.social.linkedin) {
        socialLinks.innerHTML += `<a href="${portfolioData.social.linkedin}" target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i></a>`;
    }
    if (portfolioData.social.twitter) {
        socialLinks.innerHTML += `<a href="${portfolioData.social.twitter}" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>`;
    }
    if (portfolioData.social.email) {
        socialLinks.innerHTML += `<a href="mailto:${portfolioData.social.email}" class="social-link"><i class="fas fa-envelope"></i></a>`;
    }

    // Start typing animation
    startTypingAnimation();
}

// Typing Animation
function startTypingAnimation() {
    const typingText = document.getElementById('typingText');
    const roles = portfolioData.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Update About Section
function updateAboutSection() {
    document.getElementById('aboutText').textContent = portfolioData.about;
}

// Update Stats Section
function updateStats() {
    const statsContainer = document.getElementById('aboutStats');
    statsContainer.innerHTML = '';

    // Reset animation flag
    statsAnimated = false;

    // Calculate project count from projects array
    const projectCount = portfolioData.projects.length;

    // Get stats from JSON or use defaults
    const stats = portfolioData.stats || {
        "Technologies": 15,
        "Years Coding": 3
    };

    // Always add Projects count
    const allStats = {
        "Projects": projectCount,
        ...stats
    };

    Object.entries(allStats).forEach(([label, value]) => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item fade-in';

        statItem.innerHTML = `
            <h3 class="stat-number" data-target="${value}">0</h3>
            <p class="stat-label">${label}</p>
        `;

        statsContainer.appendChild(statItem);
    });
}

// Update Projects
function updateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.animationDelay = `${index * 0.1}s`;

        projectCard.innerHTML = `
            <div class="project-image" aria-label="${project.title} project icon">
                <i class="fas ${project.image}"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>

                <div class="project-links">
                    ${project.liveUrl
                ? `<a href="${project.liveUrl}" target="_blank" class="project-link primary" aria-label="View live demo of ${project.title}">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>`
                : ""}

                    ${project.githubUrl
                ? `<a href="${project.githubUrl}" target="_blank" class="project-link secondary" aria-label="View source code of ${project.title}">
                        <i class="fab fa-github"></i> Code
                    </a>`
                : ""}

                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Update Skills
function updateSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = '';

    const categoryIcons = {
        "Frontend Development": "fa-laptop-code",
        "Backend Development": "fa-server",
        "Tools & Platforms": "fa-tools",
        "Medical Knowledge": "fa-stethoscope"
    };

    Object.entries(portfolioData.skills).forEach(([category, skills], index) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category fade-in';
        skillCategory.style.animationDelay = `${index * 0.1}s`;

        const icon = categoryIcons[category] || "fa-code";

        skillCategory.innerHTML = `
            <h3 class="category-title">
                <i class="fas ${icon}"></i>
                ${category}
            </h3>
            <div class="skill-list">
                ${skills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
        `;

        skillsContainer.appendChild(skillCategory);
    });
}

// Update Certificates
function updateCertificates() {
    const certificatesContainer = document.getElementById('certificatesContainer');
    certificatesContainer.innerHTML = '';

    if (!portfolioData.certificates || Object.keys(portfolioData.certificates).length === 0) {
        certificatesContainer.innerHTML = `
            <div class="no-certificates">
                <i class="fas fa-certificate"></i>
                <p>No certificates added yet. Add them in data.json!</p>
            </div>
        `;
        return;
    }

    const categoryIcons = {
        "Work & Volunteer": "fa-briefcase",
        "Education": "fa-graduation-cap",
        "Technical": "fa-code",
        "Medical": "fa-heartbeat",
        "Achievements": "fa-trophy"
    };

    Object.entries(portfolioData.certificates).forEach(([category, certificates], index) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'certificate-category fade-in';
        categoryDiv.style.animationDelay = `${index * 0.1}s`;

        const icon = categoryIcons[category] || "fa-certificate";

        categoryDiv.innerHTML = `
            <div class="category-header">
                <h3>
                    <i class="fas ${icon}"></i>
                    ${category}
                </h3>
                <span class="category-count">${certificates.length}</span>
            </div>
            <div class="certificates-grid">
                ${certificates.map(cert => `
                    <div class="certificate-card ${!cert.image ? 'no-image' : ''}" onclick="${cert.url ? `window.open('${cert.url}', '_blank')` : ''}" role="button" tabindex="0" aria-label="${cert.title} certificate - ${cert.issuer}">
                        ${cert.image ? `<img src="${cert.image}" alt="${cert.title} certificate from ${cert.issuer}" class="certificate-image">` : ''}
                        <div class="certificate-overlay">
                            <h4 class="certificate-title">${cert.title}</h4>
                            <p class="certificate-issuer">
                                <i class="fas fa-building" aria-hidden="true"></i>
                                ${cert.issuer}
                            </p>
                            <p class="certificate-date">
                                <i class="fas fa-calendar" aria-hidden="true"></i>
                                ${cert.date}
                            </p>
                            ${cert.credentialId ? `<span class="credential-id"><i class="fas fa-fingerprint" aria-hidden="true"></i> ${cert.credentialId}</span>` : ''}
                            ${cert.url ? `<a href="${cert.url}" target="_blank" class="certificate-link" onclick="event.stopPropagation()" aria-label="Verify ${cert.title} certificate"><i class="fas fa-external-link-alt"></i> Verify</a>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        certificatesContainer.appendChild(categoryDiv);
    });
}

// Update Contact
function updateContact() {
    const contactDetails = document.getElementById('contactDetails');
    contactDetails.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>${portfolioData.contact.email}</span>
        </div>
        <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>${portfolioData.contact.phone}</span>
        </div>
        <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>${portfolioData.contact.location}</span>
        </div>
    `;
}

// Update Footer
function updateFooter() {
    document.getElementById('footerName').textContent = portfolioData.name;
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Update SEO
function updateSEO() {
    // Update page title
    document.title = `${portfolioData.name} | ${portfolioData.title} Portfolio`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content',
            `${portfolioData.name} - ${portfolioData.description}. View my projects, skills, and certifications.`
        );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        const skills = Object.values(portfolioData.skills).flat().join(', ');
        metaKeywords.setAttribute('content',
            `${portfolioData.name}, ${portfolioData.title}, ${skills}, Cairo, Egypt, portfolio`
        );
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', `${portfolioData.name} | ${portfolioData.title}`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', portfolioData.description);
    }

    // Update Twitter card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.setAttribute('content', `${portfolioData.name} | ${portfolioData.title}`);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
        twitterDescription.setAttribute('content', portfolioData.description);
    }

    // Update structured data (JSON-LD)
    const structuredData = document.getElementById('structuredData');
    if (structuredData) {
        const socialLinks = [];
        if (portfolioData.social.github) socialLinks.push(portfolioData.social.github);
        if (portfolioData.social.linkedin) socialLinks.push(portfolioData.social.linkedin);
        if (portfolioData.social.twitter) socialLinks.push(portfolioData.social.twitter);

        const skills = Object.values(portfolioData.skills).flat();

        const schemaData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": portfolioData.name,
            "jobTitle": portfolioData.title,
            "description": portfolioData.about.substring(0, 200) + '...',
            "url": window.location.href,
            "sameAs": socialLinks,
            "knowsAbout": skills.slice(0, 10), // Top 10 skills
            "address": {
                "@type": "PostalAddress",
                "addressLocality": portfolioData.contact.location.split(',')[0].trim(),
                "addressCountry": "Egypt"
            }
        };

        structuredData.textContent = JSON.stringify(schemaData, null, 2);
    }
}

// Navigation
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');

// Theme toggle click handler
themeToggle.addEventListener('click', cycleTheme);

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate stats counter
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;

    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        updateCounter();
    });
}

// Setup Intersection Observer
function setupObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger stats animation when about section is visible
                if (entry.target.closest('.about') || entry.target.classList.contains('stat-item')) {
                    animateStats();
                }
            }
        });
    }, observerOptions);

    // Observe all fade-in elements including stat items
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }, 50);
}

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch("https://formspree.io/f/xyewwbkw", {
        "method": "POST",
        "headers": {
            "accept": "application/json"
        },
        "body": JSON.stringify({
            "name": name,
            "email": email,
            "message": message
        })
    }).then(r => r.json()).then(d => {
        if (d["error"]) {
            alert("Please fill all fields");
        }
        else {
            alert(`Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
        }
    })


    // Reset form
    contactForm.reset();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadData);
