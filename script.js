setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentdate = new Date()
    console.log(currentdate);
    const secondsRadio = currentdate.getSeconds() / 60;
    const minutesRadio = (secondsRadio + currentdate.getMinutes()) / 60;
    const hoursRadio = (minutesRadio + currentdate.getHours()) / 12;
    setRotation(secondHand, secondsRadio);
    setRotation(minuteHand, minutesRadio);
    setRotation(hourHand, hoursRadio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)

}