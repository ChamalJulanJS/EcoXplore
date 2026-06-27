document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.modern-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); 
            if(window.scrollY === 0) navbar.classList.remove('scrolled');
        }
    });
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-nav-menu');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    if (menuToggle && mobileMenu && mobileOverlay) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        mobileOverlay.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;
            const inputs = bookingForm.querySelectorAll("[required]");
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add("is-invalid");
                    isValid = false;
                } else {
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                }
            });
            if (isValid) {
                const formMessage = document.getElementById("formMessage");
                formMessage.innerHTML = `<div class="alert alert-success bg-transparent border-success text-success" role="alert">
                    Request submitted successfully. We will contact you soon.
                </div>`;
                bookingForm.reset();
                inputs.forEach(i => i.classList.remove("is-valid"));
            }
        });
        bookingForm.querySelectorAll("input, select, textarea").forEach(input => {
            input.addEventListener("input", function() {
                this.classList.remove("is-invalid");
            });
        });
    }
});
