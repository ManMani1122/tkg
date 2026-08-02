/* 

JavaScript Document

Table Knight Games

*/

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {

    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');

        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1000);


    // Header scroll effect
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', () => {

            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

        });
    }


    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');


    if (menuToggle && navMenu) {

        menuToggle.addEventListener('click', () => {

            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

        });


        // Close mobile menu when clicking links
        document.querySelectorAll('.nav-menu a').forEach(link => {

            link.addEventListener('click', () => {

                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');

            });

        });

    }



    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function(e) {

            const targetID = this.getAttribute('href');

            const target = document.querySelector(targetID);


            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: 'smooth',
                    block: 'start'

                });

            }

        });

    });



    // Active menu highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');


    if (sections.length > 0 && navLinks.length > 0) {

        window.addEventListener('scroll', () => {

            let current = "";


            sections.forEach(section => {

                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;


                if (window.pageYOffset >= sectionTop - 200) {

                    current = section.getAttribute('id');

                }

            });



            navLinks.forEach(link => {

                link.classList.remove('active');


                if (link.getAttribute('href').slice(1) === current) {

                    link.classList.add('active');

                }

            });

        });

    }




    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal');


    const revealOnScroll = () => {


        revealElements.forEach(element => {


            const elementTop = element.getBoundingClientRect().top;

            const elementVisible = 150;



            if (elementTop < window.innerHeight - elementVisible) {

                element.classList.add('active');

            }


        });


    };



    window.addEventListener('scroll', revealOnScroll);


    // Run once when page loads
    revealOnScroll();



});