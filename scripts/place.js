document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = "Last Modified: " + document.lastModified;

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        let wc = 13.12 +
                 (0.6215 * temp) -
                 (11.37 * Math.pow(speed, 0.16)) +
                 (0.3965 * temp * Math.pow(speed, 0.16));

        return wc.toFixed(1) + " °C";
    }
    return "N/A";
}

let tempText = document.querySelector("#temp-static").textContent;
let temp = parseFloat(tempText);

let windText = document.querySelector("#wind").textContent;
let windSpeed = parseFloat(windText);

windSpeed = windSpeed * 1.609;

document.querySelector("#windchill").textContent = calculateWindChill(temp, windSpeed);
