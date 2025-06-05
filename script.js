function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[now.getMonth()];
    const dateString = `${day} ${monthName} ${year}`;
    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

function worldclock() {
    const newYorkTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('new-york-clock').textContent = newYorkTime;
    const londonTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('london-clock').textContent = londonTime;
    const tokyoTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('tokyo-clock').textContent = tokyoTime;
    const sydneyTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Australia/Sydney',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('sydney-clock').textContent = sydneyTime;
}
worldclock();
updateClock();
setInterval(worldclock, 1000);
setInterval(updateClock, 1000);