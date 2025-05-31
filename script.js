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
updateClock();
setInterval(updateClock, 1000);