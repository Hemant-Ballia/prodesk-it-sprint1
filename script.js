document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.getElementById('navbar');
    let isScrollLocked = false; 

    /* =========================================================
        Custom Scroll Logic for Hiding Navbar on Scroll Down from Top
    ========================================================= */
    
    
    window.addEventListener('wheel', (e) => {
        const menuCheckbox = document.getElementById('menu-checkbox');
        if (menuCheckbox && menuCheckbox.checked) return;

        if (window.scrollY === 0 && e.deltaY > 0 && !navbar.classList.contains('nav-hidden')) {
            e.preventDefault(); 
            navbar.classList.add('nav-hidden'); 

            if (!isScrollLocked) {
                isScrollLocked = true;
                setTimeout(() => {
                    isScrollLocked = false;
                }, 500); 
            }
        } else if (isScrollLocked) {
            e.preventDefault(); 
        }
    }, { passive: false }); 

    
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
        const menuCheckbox = document.getElementById('menu-checkbox');
        if (menuCheckbox && menuCheckbox.checked) return;

        let touchEndY = e.touches[0].clientY;
        let isScrollingDown = touchStartY > touchEndY; 

        if (window.scrollY === 0 && isScrollingDown && !navbar.classList.contains('nav-hidden')) {
            e.preventDefault();
            navbar.classList.add('nav-hidden');

            if (!isScrollLocked) {
                isScrollLocked = true;
                setTimeout(() => {
                    isScrollLocked = false;
                }, 500);
            }
        } else if (isScrollLocked) {
            e.preventDefault();
        }
    }, { passive: false });


    /* =========================================================
       Standard Scroll Logic
    ========================================================= */
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (isScrollLocked) return; 

        const menuCheckbox = document.getElementById('menu-checkbox');
        if (menuCheckbox && menuCheckbox.checked) return;

        if (window.scrollY > lastScrollY && window.scrollY > 20) {
            navbar.classList.add('nav-hidden'); 
        } else if (window.scrollY < lastScrollY) {
            navbar.classList.remove('nav-hidden'); 
        }
        lastScrollY = window.scrollY;
    });

    /* =========================================================
         Controllers 
    ========================================================= */
    
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    
    const navLinks = document.querySelectorAll('.menu-items a');
    const menuCheckbox = document.getElementById('menu-checkbox');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuCheckbox) menuCheckbox.checked = false; 
        });
    });

    
    const video = document.getElementById('hero-vid');
    const videoBtn = document.getElementById('video-control');
    
    if (videoBtn && video) {
        const videoIcon = videoBtn.querySelector('i');
        videoBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                videoIcon.classList.replace('fa-play', 'fa-pause');
            } else {
                video.pause();
                videoIcon.classList.replace('fa-pause', 'fa-play');
            }
        });
    }

    
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
});