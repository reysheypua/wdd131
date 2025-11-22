const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // ─────────── Added Temples ───────────
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48600,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Cebu City Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010, June, 13",
    area: 29825,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
  }
];

createTempleCard(temples);

const homeLink = document.querySelector("#nav-home");
homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

const oldLink = document.querySelector("#nav-old");
oldLink.addEventListener("click", () => {
  createTempleCard(
    temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year < 1900;
    })
  );
});

const newLink = document.querySelector("#nav-new");
newLink.addEventListener("click", () => {
  createTempleCard(
    temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year > 2000;
    })
  );
});

const largeLink = document.querySelector("#nav-large");
largeLink.addEventListener("click", () => {
  createTempleCard(
    temples.filter(temple => temple.area > 90000)
  );
});

const smallLink = document.querySelector("#nav-small");
smallLink.addEventListener("click", () => {
  createTempleCard(
    temples.filter(temple => temple.area < 10000)
  );
});


function createTempleCard(filteredTemples) {
  document.querySelector(".res-grid").innerHTML = "";

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;

    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
}


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