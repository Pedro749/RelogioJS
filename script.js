const timer = {
    getTime() {
        let timeTotal =  new Date();
        return timeTotal;
    },
    getHours() {
        let hours = timer.getTime().getHours();
        return hours
    },
    getMinutes() {
        let minutes = timer.getTime().getMinutes();
        return minutes;
    },
    getSeconds() {
        let seconds = timer.getTime().getSeconds();
        return seconds;
    },
    getPointerH() {
        let Hours = document.getElementById("hours");
        return Hours;        
    },
    getPointerM() {
        let Minutes = document.getElementById("minutes");
        return Minutes;        
    },
    getPointerS() {
        let Seconds = document.getElementById("seconds");
        return Seconds;
        
    },
    setTime() {
        let Hrs = timer.getHours();
        Hrs > 12 ? Hrs % 12 : Hrs; 
        Hrs = Hrs * 30;

        let Mnts = timer.getMinutes();
        Mnts = Mnts * 6;

        let Scnds = timer.getSeconds();
        Scnds = Scnds * 6;

        timer.getPointerH().style.transform = "rotate("+ Hrs +"deg)";
        timer.getPointerM().style.transform = "rotate("+ Mnts +"deg)";
        timer.getPointerS().style.transform = "rotate("+ Scnds +"deg)";
    }
}

setInterval(() => {
    timer.setTime();
}, 1000);