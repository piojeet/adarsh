const dropdownBtns = document.querySelectorAll('.nav__item--has-dropdown');

function handleMouseEnter(btn, dropdown, icon) {
    dropdown.classList.add('dropdown-menu-cont--active');
    icon.classList.add('nav-rotate--icon--active');
}

function handleMouseLeave(dropdown, icon) {
    dropdown.classList.remove('dropdown-menu-cont--active');
    icon.classList.remove('nav-rotate--icon--active');
}

dropdownBtns.forEach(btn => {
    const dropdown = btn.querySelector('.dropdown-menu-cont');
    const dropdownicon = btn.querySelector('.nav-rotate--icon');
    const trigger = btn.querySelector('.nav__item--has-dropdown-wrap');

    // Hover support only for desktop
    const mouseEnterHandler = () => handleMouseEnter(btn, dropdown, dropdownicon);
    const mouseLeaveHandler = () => handleMouseLeave(dropdown, dropdownicon);

    const addHoverListeners = () => {
        if (window.innerWidth > 900) {
            btn.addEventListener('mouseenter', mouseEnterHandler);
            btn.addEventListener('mouseleave', mouseLeaveHandler);
        } else {
            btn.removeEventListener('mouseenter', mouseEnterHandler);
            btn.removeEventListener('mouseleave', mouseLeaveHandler);
        }
    };

    addHoverListeners();
    window.addEventListener('resize', addHoverListeners);

    // Click toggle only on trigger
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();

        const isActive = dropdown.classList.contains('dropdown-menu-cont--active');

        // Close all other dropdowns
        dropdownBtns.forEach(otherBtn => {
            const otherDropdown = otherBtn.querySelector('.dropdown-menu-cont');
            const otherIcon = otherBtn.querySelector('.nav-rotate--icon');
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('dropdown-menu-cont--active');
                otherIcon.classList.remove('nav-rotate--icon--active');
            }
        });

        // Toggle current
        if (!isActive) {
            dropdown.classList.add('dropdown-menu-cont--active');
            dropdownicon.classList.add('nav-rotate--icon--active');
        } else {
            dropdown.classList.remove('dropdown-menu-cont--active');
            dropdownicon.classList.remove('nav-rotate--icon--active');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Click outside to close all
document.addEventListener('click', () => {
    dropdownBtns.forEach(btn => {
        const dropdown = btn.querySelector('.dropdown-menu-cont');
        const dropdownicon = btn.querySelector('.nav-rotate--icon');
        dropdown.classList.remove('dropdown-menu-cont--active');
        dropdownicon.classList.remove('nav-rotate--icon--active');
    });
});



const track = document.getElementById('scroll-track');

// Duplicate images for seamless loop
track.innerHTML += track.innerHTML;

let scrollAmount = 0;
function animate() {
    scrollAmount += 1;
    if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0; // Reset without blink
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animate);
}

animate();



const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');
        document.getElementById(target).classList.add('active');
    });
});



document.querySelectorAll('.faq-section__question').forEach((question) => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});


let menubtn = document.querySelectorAll('.menu--btn');
let navmenu = document.querySelectorAll('.header__nav');

menubtn.forEach(btn => {
    btn.addEventListener('click', () => {
        navmenu.forEach(menu => {
            menu.classList.toggle('menu-active'); // ✅ corrected line
            btn.classList.toggle('btn-active');
        });
    });
});