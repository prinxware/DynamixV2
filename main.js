
     tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: '#0066FF',
                        zinc: {
                            50: '#FAFAFA',
                            100: '#F4F4F5',
                            200: '#E4E4E7',
                            300: '#D4D4D8',
                            400: '#A1A1AA',
                            500: '#71717A',
                            600: '#52525B',
                            800: '#27272A',
                            900: '#18181B',
                        }
                    },
                    fontFamily: {
                        grotesk: ['Space Grotesk', 'sans-serif'],
                    },
                }
            }
        }
        
    // Initialize Icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileMenuToggle.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Scroll Reveal Animation
    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));
    });