function updateTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    const now = new Date();

    // Get day, date, month, year
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = daysOfWeek[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const month = monthsOfYear[now.getMonth()];
    const year = now.getFullYear();

    // Get time (hours, minutes, seconds)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format the full timestamp
    const formattedTime = `${day}, ${date} ${month} ${year} ${hours}:${minutes}:${seconds}`;
    
    // Display the timestamp
    timestampElement.textContent = formattedTime;
}

// Update timestamp on page load
updateTimestamp();

// Update timestamp every second for real-time effect
setInterval(updateTimestamp, 1000);
