const clock = document.getElementById("clock")


digitalClock()
setInterval(digitalClock)

function digitalClock() {
    let date = new Date()

    updateClock()

    function updateClock() {

        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let amPm = hours > 12 ? "PM" : "AM"

        hours = (hours % 12)


        hours = addZero(hours)
        minutes = addZero(minutes)
        seconds = addZero(seconds)

        clock.textContent = `${hours}:${minutes}:${seconds} ${amPm}`
    }

    function addZero(zero) {
        zero = zero.toString()

        return zero.length < 2 ? 0 + zero : zero 
   
}
}
