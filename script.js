// Always start at top when page loads
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

// Category Filter Buttons
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;
        projectCards.forEach(card => {
            const category = card.dataset.category;
            if (filter === "all" || category === filter) {
                card.style.display = "block";
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);
            } else {
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
                setTimeout(() => {
                    card.style.display = "none";
                }, 200);
            }
        });
    });
});

// Redirect to Project Detail Page on Card Click
const clickableProjects = document.querySelectorAll(".clickable-project");
clickableProjects.forEach(card => {
    card.addEventListener("click", () => {
        const projectId = card.dataset.id;
        if (projectId) {
            window.location.href = `project.html?id=${projectId}`;
        }
    });
});

// Professional Email Confirmation Prompt
const emailBtn = document.getElementById("email-btn");
if (emailBtn) {
    emailBtn.addEventListener("click", () => {
        const confirmChoice = confirm("Would you like to compose an email to Kawsar Ahamed Nasim (mdnasim70470@gmail.com)?");
        if (confirmChoice) {
            const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=mdnasim70470@gmail.com";
            window.open(gmailUrl, "_blank");
        }
    });
}

// Scroll Reveal Animations - Repeated on Every Scroll
document.addEventListener("DOMContentLoaded", () => {
    const revealTargets = document.querySelectorAll(
        ".section-heading, .service-card, .project-card, .stat-card, .benefit, .testimonial-card, .about-text"
    );

    revealTargets.forEach((el, index) => {
        el.classList.add("reveal-on-scroll");
        const delayClass = `delay-${(index % 4) + 1}`;
        el.classList.add(delayClass);
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                entry.target.classList.remove("is-visible");
            }
        });
    }, observerOptions);

    revealTargets.forEach(el => revealObserver.observe(el));
});