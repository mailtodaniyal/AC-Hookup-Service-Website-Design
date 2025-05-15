        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const nav = document.getElementById('nav');

        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.innerHTML = nav.classList.contains('active') ?
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Testimonial Slider
        $(document).ready(function () {
            $('.testimonial-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false
            });
        });

        // Form submission
        const leadForm = document.getElementById('lead-form');
        leadForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect form data
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                phone: this.querySelector('input[type="tel"]').value,
                service: this.querySelector('select').value,
                message: this.querySelector('textarea').value
            };

            // Show success message
            alert(`Thank you, ${formData.name}! We'll contact you shortly about your ${formData.service} request.`);

            // Reset form
            this.reset();

            // In a real implementation, you would use the GoHighLevel API:
            // fetch('https://api.gohighlevel.com/v1/contacts', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
            //     },
            //     body: JSON.stringify({
            //         name: formData.name,
            //         email: formData.email,
            //         phone: formData.phone,
            //         tags: ['ac-service-request', formData.service],
            //         customFields: {
            //             serviceRequest: formData.service,
            //             message: formData.message
            //         }
            //     })
            // })
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.error(error));
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.service-card, .section-header, .benefit-item');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animate on scroll elements
        document.querySelectorAll('.service-card, .section-header, .benefit-item').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
