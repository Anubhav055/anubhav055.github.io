// Embedded data as fallback when CSV files cannot be loaded (file:// protocol)
const fallbackData = {
    skills: [
        { name: 'Java', icon: '☕', level: 'Advanced' },
        { name: 'Spring Boot', icon: '🍃', level: 'Advanced' },
        { name: 'GCP', icon: '☁️', level: 'Intermediate' },
        { name: 'Microservices', icon: '🔧', level: 'Intermediate' },
        { name: 'PostgreSQL', icon: '🐘', level: 'Intermediate' },
        { name: 'CI/CD', icon: '🔄', level: 'Intermediate' },
        { name: 'Git', icon: '📚', level: 'Advanced' },
        { name: 'HTML', icon: '🌐', level: 'Advanced' },
        { name: 'CSS', icon: '🎨', level: 'Advanced' },
        { name: 'JavaScript', icon: '⚡', level: 'Intermediate' },
        { name: 'IoT', icon: '📡', level: 'Intermediate' },
        { name: 'AWS', icon: '☁️', level: 'Beginner' },
        { name: 'SQL', icon: '🗃️', level: 'Intermediate' },
        { name: 'REST APIs', icon: '🔗', level: 'Intermediate' },
        { name: 'Docker', icon: '🐳', level: 'Beginner' },
        { name: 'Kubernetes', icon: '⚙️', level: 'Beginner' }
    ],
    
    experience: [
        {
            position: 'Programmer Analyst',
            company: 'Cognizant',
            location: 'Kolkata, WEST BENGAL',
            startDate: 'December 2023',
            endDate: 'Present',
            description: '• Integral role in \'Qualcomm Car to Cloud\' project using GCP, Spring Framework, and microservices • Currently working on a live project involving cutting-edge technologies with hands-on experience in various modern tools and frameworks • Led real-time IoT data transfer development ensuring secure and scalable vehicle-to-cloud communication • Skilled in adapting to new technologies and delivering high-impact solutions in real-time environments'
        },
        {
            position: 'Programmer Analyst Trainee',
            company: 'Cognizant',
            location: 'Kolkata, WEST BENGAL',
            startDate: 'October 2023',
            endDate: 'December 2023',
            description: '• Gained hands-on experience in IoT and web applications development using Java 8, HTML & CSS, JavaScript, SQL, and AWS during a comprehensive internship • Participated in intensive training programs covering software development lifecycle and best practices • Collaborated with cross-functional teams to understand industry requirements and standards'
        }
    ],
    
    projects: [
        {
            title: 'Qualcomm Car to Cloud',
            description: 'Real-time IoT data transfer system enabling secure vehicle-to-cloud communication with scalable microservices architecture. Implemented comprehensive monitoring and logging solutions for production environment.',
            technologies: 'Java, Spring Boot, GCP, Microservices, PostgreSQL',
            icon: 'fas fa-car',
            github: '#',
            demo: '#'
        },
        {
            title: 'Face Recognition using IoT',
            description: 'Face recognition system integrated with IoT devices for real-time secure authentication by analyzing facial features using machine learning algorithms. Built during academic project with practical implementation.',
            technologies: 'Java, Python, OpenCV, IoT, Raspberry Pi',
            icon: 'fas fa-user-check',
            github: '#',
            demo: '#'
        },
        {
            title: 'Driver Anti-Sleep Device',
            description: 'Innovative safety device designed to detect driver drowsiness and prevent accidents through real-time monitoring and alert systems. Presented at XPLORE\'2022 technical event.',
            technologies: 'Arduino, C++, Sensors, IoT',
            icon: 'fas fa-shield-alt',
            github: '#',
            demo: '#'
        },
        {
            title: 'Professional Java Development',
            description: 'Comprehensive Java programming certification project covering advanced concepts, object-oriented programming, design patterns, and enterprise application development.',
            technologies: 'Java, Spring, Hibernate, Maven',
            icon: 'fab fa-java',
            github: '#',
            demo: '#'
        },
        {
            title: 'Web Application Portfolio',
            description: 'Responsive portfolio website showcasing projects and skills with modern UI/UX design principles. Features dynamic content loading and mobile-first approach.',
            technologies: 'HTML, CSS, JavaScript, Bootstrap',
            icon: 'fas fa-laptop-code',
            github: '#',
            demo: '#'
        }
    ],
    
    education: [
        {
            degree: 'Bachelor of Technology in Electronics and Communication',
            institution: 'Future Institute of Technology',
            location: 'Kolkata',
            year: 'Jul 2023',
            gpa: '8.96',
            relevant_coursework: 'Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Software Engineering, Digital Signal Processing, Microprocessors, Embedded Systems'
        },
        {
            degree: 'Professional Java Programming Certification',
            institution: 'Ardent Computech Pvt.Ltd',
            location: 'Kolkata',
            year: '2023',
            gpa: '',
            relevant_coursework: 'Advanced Java Programming, Spring Framework, Hibernate ORM, Design Patterns, Enterprise Application Development'
        }
    ],
    
    contact: [
        { type: 'Phone', value: '070037 05171', icon: 'fas fa-phone' },
        { type: 'Email', value: 'anubhav.rajput055@gmail.com', icon: 'fas fa-envelope' },
        { type: 'Location', value: 'Kolkata, West Bengal 700060', icon: 'fas fa-map-marker-alt' },
        { type: 'LinkedIn', value: 'https://www.linkedin.com/in/anubhav-chauhan-1843a4194/', icon: 'fab fa-linkedin' },
        { type: 'GitHub', value: 'https://github.com/Anubhav055', icon: 'fab fa-github' }
    ]
};

// Utility function to parse CSV
function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index] || '';
        });
        data.push(row);
    }
    return data;
}

// Utility function to load CSV data with fallback
async function loadCSV(filename) {
    // Extract the data type from filename
    const dataType = filename.split('/')[1].split('.')[0]; // e.g., 'skills' from 'data/skills.csv'
    
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        return parseCSV(text);
    } catch (error) {
        console.warn(`Could not load ${filename}, using fallback data:`, error);
        // Return fallback data based on the data type
        return fallbackData[dataType] || [];
    }
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        let current = '';
        const navHeight = document.querySelector('.nav').offsetHeight;
        const scrollPos = pageYOffset + navHeight + 80; // Increased offset
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Smooth scrolling for anchor links with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                // Special handling for About section
                const extraOffset = target.id === 'about' ? 80 : 40;
                const targetPosition = target.offsetTop - navHeight - extraOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Load dynamic content
    loadDynamicContent();

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Add scroll animations
    addScrollAnimations();
});

// Load all dynamic content from CSV files or fallback data
async function loadDynamicContent() {
    try {
        console.log('Loading dynamic content...');
        
        // Try to load CSV files, fallback to embedded data if failed
        const [skills, experience, projects, education, contact] = await Promise.all([
            loadCSV('data/skills.csv'),
            loadCSV('data/experience.csv'),
            loadCSV('data/projects.csv'),
            loadCSV('data/education.csv'),
            loadCSV('data/contact.csv')
        ]);

        console.log('Data loaded:', { skills: skills.length, experience: experience.length, projects: projects.length });

        // Populate sections with data
        populateSkills(skills);
        populateExperience(experience);
        populateProjects(projects);
        populateEducation(education);
        populateContact(contact);
        
        console.log('All sections populated successfully');
    } catch (error) {
        console.error('Error loading dynamic content:', error);
        // Load fallback data directly if everything fails
        populateSkills(fallbackData.skills);
        populateExperience(fallbackData.experience);
        populateProjects(fallbackData.projects);
        populateEducation(fallbackData.education);
        populateContact(fallbackData.contact);
    }
}

// Populate Skills Section
function populateSkills(skills) {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) {
        console.error('Skills container not found');
        return;
    }
    
    if (!skills || skills.length === 0) {
        console.warn('No skills data available');
        return;
    }

    skillsContainer.innerHTML = skills.map((skill, index) => `
        <div class="skill-item" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">${skill.level}</div>
        </div>
    `).join('');
    
    console.log(`Populated ${skills.length} skills`);
}

// Populate Experience Section
function populateExperience(experience) {
    const experienceContainer = document.getElementById('experience-container');
    if (!experienceContainer) {
        console.error('Experience container not found');
        return;
    }
    
    if (!experience || experience.length === 0) {
        console.warn('No experience data available');
        return;
    }

    experienceContainer.innerHTML = experience.map((exp, index) => `
        <div class="timeline-item" data-aos="fade-${index % 2 === 0 ? 'right' : 'left'}" data-aos-delay="${index * 200}">
            <div class="timeline-content">
                <div class="timeline-date">${exp.startDate} - ${exp.endDate}</div>
                <h3 class="timeline-title">${exp.position}</h3>
                <div class="timeline-company">${exp.company} • ${exp.location}</div>
                <div class="timeline-description">
                    ${exp.description.split('•').filter(item => item.trim()).map(item => `<p>• ${item.trim()}</p>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    console.log(`Populated ${experience.length} experience items`);
}

// Populate Projects Section
function populateProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) {
        console.error('Projects container not found');
        return;
    }
    
    if (!projects || projects.length === 0) {
        console.warn('No projects data available');
        return;
    }

    projectsContainer.innerHTML = projects.map((project, index) => `
        <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 150}">
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.split(',').map(tech => `<span class="tech-tag">${tech.trim()}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github && project.github !== '#' ? `<a href="${project.github}" class="project-link" target="_blank">View Code <i class="fas fa-external-link-alt"></i></a>` : ''}
                    ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" class="project-link" target="_blank">Live Demo <i class="fas fa-external-link-alt"></i></a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    console.log(`Populated ${projects.length} projects`);
}

// Populate Education Section
function populateEducation(education) {
    const educationContainer = document.getElementById('education-container');
    if (!educationContainer) {
        console.error('Education container not found');
        return;
    }
    
    if (!education || education.length === 0) {
        console.warn('No education data available');
        return;
    }

    educationContainer.innerHTML = education.map(edu => `
        <div class="education-item" data-aos="fade-up">
            <h4>${edu.degree}</h4>
            <p><strong>${edu.institution}</strong></p>
            <p>${edu.location} • ${edu.year}</p>
            ${edu.gpa ? `<p><strong>GPA:</strong> ${edu.gpa}</p>` : ''}
            ${edu.relevant_coursework ? `<p><strong>Relevant Coursework:</strong> ${edu.relevant_coursework}</p>` : ''}
        </div>
    `).join('');
    
    console.log(`Populated ${education.length} education items`);
}

// Populate Contact Section
function populateContact(contact) {
    const contactContainer = document.getElementById('contact-container');
    if (!contactContainer) {
        console.error('Contact container not found');
        return;
    }
    
    if (!contact || contact.length === 0) {
        console.warn('No contact data available');
        return;
    }

    contactContainer.innerHTML = contact.map(item => {
        let valueContent = item.value;
        
        // Make LinkedIn and GitHub clickable links
        if (item.type === 'LinkedIn' || item.type === 'GitHub') {
            valueContent = `<a href="${item.value}" target="_blank" style="color: #3b82f6; text-decoration: none;">${item.value.replace('https://', '')}</a>`;
        }
        // Make email clickable
        else if (item.type === 'Email') {
            valueContent = `<a href="mailto:${item.value}" style="color: #3b82f6; text-decoration: none;">${item.value}</a>`;
        }
        // Make phone clickable
        else if (item.type === 'Phone') {
            valueContent = `<a href="tel:${item.value}" style="color: #3b82f6; text-decoration: none;">${item.value}</a>`;
        }
        
        return `
            <div class="contact-item" data-aos="fade-right">
                <div class="contact-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div class="contact-details">
                    <h4>${item.type}</h4>
                    <p>${valueContent}</p>
                </div>
            </div>
        `;
    }).join('');
    
    console.log(`Populated ${contact.length} contact items`);
}

// Initialize EmailJS
(function() {
    emailjs.init("5928dgIUk8FGOn1m-"); // Your EmailJS public key
})();

// Handle Contact Form Submission with EmailJS
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    
    // Show sending message
    showNotification('Sending your message...', 'info');
    
    // Send email using EmailJS
    emailjs.sendForm('service_agenc0o', 'template_lm3mfhw', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        })
        .catch(function(error) {
            console.error('EmailJS Error:', error);
            
            // Fallback to mailto if EmailJS fails
            const formData = new FormData(form);
            const name = formData.get('from_name');
            const email = formData.get('from_email');
            const message = formData.get('message');
            
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:anubhav.rajput055@gmail.com?subject=${subject}&body=${body}`;
            
            window.location.href = mailtoLink;
            showNotification('Opening email client as fallback. Please send the message manually.', 'info');
        });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add scroll animations using Intersection Observer
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements when they're added to the page
    setTimeout(() => {
        document.querySelectorAll('.skill-item, .timeline-item, .project-card, .education-item, .contact-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
}

// Typing effect for hero description
function initTypingEffect() {
    const heroDescription = document.querySelector('.hero-description');
    if (!heroDescription) return;

    const text = heroDescription.textContent;
    heroDescription.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroDescription.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(initTypingEffect, 500);
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Skills progress animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        if (progress) {
            bar.style.width = progress + '%';
        }
    });
}

// Initialize skill bars animation when skills section is visible
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    });
    skillsObserver.observe(skillsSection);
} 