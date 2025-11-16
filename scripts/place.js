// =========================================================================
// Step 5.1: Footer Dynamic Content
// =========================================================================

// Display the current year in the footer
const currentYearSpan = document.querySelector('#currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Display the last modified date in the footer
const lastModifiedElement = document.querySelector('#lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}

// =========================================================================
// Step 5.3: Wind Chill Function Definition
// =========================================================================

/**
 * Calculates the wind chill factor based on temperature and wind speed.
 * @param {number} temp - The temperature value (°C or °F).
 * @param {number} speed - The wind speed value (km/h or mph).
 * @param {string} unit - The unit system used ('metric' for °C/kmh or 'imperial' for °F/mph).
 * @returns {string} The calculated wind chill value or "N/A".
 */
function calculateWindChill(temp, speed, unit) {
    // Check viable wind chill calculation conditions (Step 5.4)
    let isViable = false;

    if (unit === 'metric') {
        // Metric: Temp <= 10 °C AND Speed > 4.8 km/h
        if (temp <= 10 && speed > 4.8) {
            isViable = true;
        }
    } else if (unit === 'imperial') {
        // Imperial: Temp <= 50 °F AND Speed > 3 mph
        if (temp <= 50 && speed > 3) {
            isViable = true;
        }
    }

    if (!isViable) {
        return "N/A";
    }

    // Perform Wind Chill Calculation (Based on standard formula)
    let windChill = 0;

    if (unit === 'metric') {
        // Metric Formula (Temperature in °C, Speed in km/h)
        // Wc = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
        const v_pow = Math.pow(speed, 0.16);
        windChill = 13.12 + (0.6215 * temp) - (11.37 * v_pow) + (0.3965 * temp * v_pow);
        // Round to 1 decimal place and append unit
        return `${windChill.toFixed(1)} °C`;
    } else if (unit === 'imperial') {
        // Imperial Formula (Temperature in °F, Speed in mph)
        // Wc = 35.74 + 0.6215*T - 35.75*V^0.16 + 0.4275*T*V^0.16
        const v_pow = Math.pow(speed, 0.16);
        windChill = 35.74 + (0.6215 * temp) - (35.75 * v_pow) + (0.4275 * temp * v_pow);
        // Round to 1 decimal place and append unit
        return `${windChill.toFixed(1)} °F`;
    }
    
    // Fallback if unit is invalid
    return "N/A";
}


// =========================================================================
// Step 5.2: Display Wind Chill using Static/Defined Variables
// =========================================================================

// Define static variables based on the values in the HTML (15 °C and 10 km/h)
// Note: The formula uses the numeric value, not the string.
const STATIC_TEMP = 15; // °C
const STATIC_SPEED = 10; // km/h
const UNIT_SYSTEM = 'metric'; 

// Get the element where the wind chill result will be displayed
const windChillElement = document.querySelector('#windchill');

if (windChillElement) {
    // Call the function with static values
    const windChillValue = calculateWindChill(STATIC_TEMP, STATIC_SPEED, UNIT_SYSTEM);
    
    // Display the result
    windChillElement.textContent = windChillValue;
}