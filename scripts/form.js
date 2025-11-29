const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProducts() {
  const selectElement = document.getElementById('productName');
  
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; 
    option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
    selectElement.appendChild(option);
  });
}

function updateLastModified() {
  const lastModifiedElement = document.getElementById('lastModified');
  if (lastModifiedElement) {
    const date = new Date(document.lastModified);
    const dateStr = date.toLocaleDateString('en-US');
    const timeStr = date.toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit'});

    lastModifiedElement.textContent = `${dateStr} ${timeStr}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateProducts();
  updateLastModified();
});

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

lastModified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;