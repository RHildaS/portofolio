/* ==================== toggle icon navbar ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
};


/* ==================== scroll sections active link ==================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ==================== sticky navbar ==================== */
    let navbar = document.querySelector('header');

    headers.classList.toggle('sticky', window.scrollY > 100);

    /* ==================== remove toggle icon and navbar when click navbar link (scroll) ==================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ==================== scroll reveal ==================== */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 1500,
    delay: 150
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contents p, .about-content', { origin: 'right' });

/* ==================== typed js ==================== */
const typed = new Typed('.multiple-text', {
    strings: ['Web Develop Enthusiast', 'Network Engineer', 'Database Enthusiast', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.querySelectorAll('.skill-box').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});