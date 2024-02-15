function updateTime () {
    const now = new Date()
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();

   hours = hours % 12;
   hours = hours ? hours : 12 //tu udris da tu ar udris

   hours = hours  < 10 ? "0" + hours : hours 
   minutes = minutes < 10 ? "0" + minutes : minutes
   seconds = seconds < 10 ? "0" + seconds : seconds

   document.getElementById ("hours").textContent = hours;
   document.getElementById ("Minutes").textContent = minutes;
   document.getElementById ("Seconds").textContent = seconds;
   

 
}
setInterval(updateTime, 1000)
updateTime();


