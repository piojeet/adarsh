document.addEventListener('DOMContentLoaded', () => {
    const menubtns = document.querySelectorAll('.menu--btn');
    const navmenus = document.querySelectorAll('.header__nav');

    if (menubtns.length && navmenus.length) {
        menubtns.forEach(btn => {
            btn.addEventListener('click', () => {
                navmenus.forEach(menu => {
                    menu.classList.toggle('menu-active');
                });
                btn.classList.toggle('btn-active');
            });
        });
    }
});





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


