const currentYearSpan = document.querySelector('#currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.querySelector('#lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}

const header = document.querySelector('header');
const nav = document.querySelector('nav');

const menuButton = document.createElement('button');
menuButton.setAttribute('id', 'menuButton');
menuButton.setAttribute('aria-label', 'Toggle Menu');
menuButton.innerHTML = '&#9776;';

if (header) {
    header.appendChild(menuButton);
}

if (nav) {
    nav.classList.add('nav-closed'); 
}

if (menuButton) {
    menuButton.addEventListener('click', () => {
        if (nav) {
            nav.classList.toggle('nav-open');
        }
        
        // Toggle the button symbol from Hamburger (&#9776;) to X (&#10006;)
        if (menuButton.textContent === '✕') {
            menuButton.innerHTML = '☰';
            menuButton.setAttribute('aria-expanded', 'false');
        } else {
            menuButton.innerHTML = '✕'; // X symbol
            menuButton.setAttribute('aria-expanded', 'true');
        }
    });
}