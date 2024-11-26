function updateClock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);