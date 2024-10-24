const dobInputEl = document.getElementById("dobInput");
const calculateButtonEl = document.getElementById("calculateButton");

const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let ageInterval;

const calculateAge = (dob) => {
    const now = new Date();
    const dobDate = new Date(dob);

    const diff = now - dobDate;
    const ageDate = new Date(diff); // Time difference as a date

    const years = ageDate.getUTCFullYear() - 1970;  // Because the epoch starts in 1970
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1; // Subtract 1 to account for days starting at 1
    const hours = now.getHours() - dobDate.getHours();
    const minutes = now.getMinutes() - dobDate.getMinutes();
    const seconds = now.getSeconds() - dobDate.getSeconds();

    // Display the calculated age
    yearsEl.textContent = years > 0 ? years : "00";
    monthsEl.textContent = months >= 0 ? months : "00";
    daysEl.textContent = days >= 0 ? days : "00";
    hoursEl.textContent = hours >= 0 ? hours : "00";
    minutesEl.textContent = minutes >= 0 ? minutes : "00";
    secondsEl.textContent = seconds >= 0 ? seconds : "00";
};

const startTimer = (dob) => {
    clearInterval(ageInterval); // Clear any previous interval

    ageInterval = setInterval(() => {
        calculateAge(dob);
    }, 1000);
};

calculateButtonEl.addEventListener('click', () => {
    const dob = dobInputEl.value;
    if (dob) {
        startTimer(dob);
    } else {
        alert("Please enter a valid Date of Birth!");
    }
});
