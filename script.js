const segundosEL = document.getElementById('segundos')
const minutosEL = document.getElementById('minutos')
const horasEL = document.getElementById('horas')
const diasEL = document.getElementById('dias')

const newLance = "1 janeiro 2100";

function countdown(){

    const newLanceDate = new Date(newLance);
    const currentDate = new Date();

    const totalSeconds = (newLanceDate - currentDate) / 1000;

    const dias = Math.floor(totalSeconds / 1200000 / 24);
    const horas = Math.floor(totalSeconds / 3600) % 24;
    const minutos = Math.floor(totalSeconds / 60) % 60;
    const segundos = Math.floor(totalSeconds ) % 60;


    diasEL.innerHTML = dias;
    horasEL.innerHTML = formatTime(horas);
    minutosEL.innerHTML = formatTime(minutos);
    segundosEL.innerHTML = formatTime(segundos) ;

}

function formatTime(time){
    return time <10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000);
