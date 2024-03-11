// let targetDate;

// document.addEventListener("DOMContentLoaded", function() {
//     updateDateTime();
//     setInterval(updateDateTime, 1000);
//     setInterval(updateCountdown, 1000);
// });

// function updateDateTime() {
//     const currentDateTimeElement = document.getElementById("currentDateTime");
//     const now = new Date();
//     currentDateTimeElement.innerHTML = now.toLocaleString();
// }

// function updateCountdown() {
//     const countdownElement = document.getElementById("countdown");
//     const daysLeftElement = document.getElementById("daysLeft");

//     const now = new Date();
//     const timeDifference = targetDate - now;

//     const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//     const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

//     countdownElement.innerHTML = `${hoursLeft}h : ${minutesLeft}m : ${secondsLeft}s`;
//     daysLeftElement.innerHTML = `${daysLeft}`;
// }

// function updateTargetDate() {
//     const dateInput = document.getElementById("date").value;
//     targetDate = new Date(dateInput + "T00:00:00"); // Assuming the input format is yyyy-mm-dd
// }

let targetDate;

document.addEventListener("DOMContentLoaded", function() {
    targetDate = localStorage.getItem("targetDate");
    if (!targetDate) {
        // If target date is not set in local storage, show date picker
        showDatePicker();
    } else {
        startCountdown();
    }
});

function showDatePicker() {
    const datePickerElement = document.getElementById("date");
    datePickerElement.addEventListener("change", function() {
        const selectedDate = datePickerElement.value;
        targetDate = new Date(selectedDate + "T00:00:00");
        localStorage.setItem("targetDate", targetDate);
        startCountdown();
    });
}

function startCountdown() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    setInterval(updateCountdown, 1000);
}

function updateDateTime() {
    const currentDateTimeElement = document.getElementById("currentDateTime");
    const now = new Date();
    currentDateTimeElement.innerHTML = now.toLocaleString();
}

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const daysLeftElement = document.getElementById("daysLeft");

    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        clearInterval(); // Stop the countdown when target date is reached
        countdownElement.innerHTML = "Countdown over!";
        daysLeftElement.innerHTML = "";
        return;
    }

    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${hoursLeft}h : ${minutesLeft}m : ${secondsLeft}s`;
    daysLeftElement.innerHTML = `${daysLeft}`;
}

