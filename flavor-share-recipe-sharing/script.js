        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Modal Functions
        function openModal(recipeId) {
            const modal = document.getElementById('recipeModal');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // In a real app, you would fetch recipe data based on the recipeId
            // and update the modal content accordingly
        }

        function closeModal() {
            const modal = document.getElementById('recipeModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside of it
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('recipeModal');
            if (e.target === modal) {
                closeModal();
            }
        });

        // Simple search functionality
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');

        searchBtn.addEventListener('click', () => {
            if (searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
                // In a real app, you would perform the search and display results
            } else {
                alert('Please enter a search term');
            }
        });

        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('.newsletter-input').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our next newsletter soon.`);
            e.target.reset();
        });