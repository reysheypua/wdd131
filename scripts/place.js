const currentYearSpan = document.querySelector('#currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.querySelector('#lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}

function calculateWindChill(temp, speed, unit) {
    let isViable = false;

    if (unit === 'metric') {
        if (temp <= 10 && speed > 4.8) {
            isViable = true;
        }
    } else if (unit === 'imperial') {
        if (temp <= 50 && speed > 3) {
            isViable = true;
        }
    }

    if (!isViable) {
        return "N/A";
    }

    let windChill = 0;

    if (unit === 'metric') {
        const v_pow = Math.pow(speed, 0.16);
        windChill = 13.12 + (0.6215 * temp) - (11.37 * v_pow) + (0.3965 * temp * v_pow);
        return `${windChill.toFixed(1)} °C`;
    } else if (unit === 'imperial') {
        const v_pow = Math.pow(speed, 0.16);
        windChill = 35.74 + (0.6215 * temp) - (35.75 * v_pow) + (0.4275 * temp * v_pow);
        return `${windChill.toFixed(1)} °F`;
    }
    return "N/A";
}

const STATIC_TEMP = 15;
const STATIC_SPEED = 10;
const UNIT_SYSTEM = 'metric'; 

const windChillElement = document.querySelector('#windchill');

if (windChillElement) {
    const windChillValue = calculateWindChill(STATIC_TEMP, STATIC_SPEED, UNIT_SYSTEM);
    windChillElement.textContent = windChillValue;
}