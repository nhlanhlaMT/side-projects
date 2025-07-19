       // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mainNav = document.querySelector('.main-nav');

        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Product Wishlist Toggle
        const wishlistButtons = document.querySelectorAll('.product-wishlist');
        
        wishlistButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const icon = button.querySelector('i');
                
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    button.style.backgroundColor = '#e74c3c';
                    button.style.color = 'white';
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    button.style.backgroundColor = 'white';
                    button.style.color = 'inherit';
                }
            });
        });

        // Testimonials Carousel (simple version)
        const testimonialsContainer = document.querySelector('.testimonials-container');
        let isDown = false;
        let startX;
        let scrollLeft;

        testimonialsContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - testimonialsContainer.offsetLeft;
            scrollLeft = testimonialsContainer.scrollLeft;
        });

        testimonialsContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        testimonialsContainer.addEventListener('mouseup', () => {
            isDown = false;
        });

        testimonialsContainer.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialsContainer.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsContainer.scrollLeft = scrollLeft - walk;
        });