function scope() {
    const timer = document.querySelector('.timer')
    const [btStart, btPause, btReset] = timer.querySelectorAll('button')
    let hours = minutes = seconds = 0
    const addZero = n => n <= 9 ? `0${n}` : n
    let time;

    function loadTimer() {
        timer.querySelector('.display').innerHTML = `
        <h1>${addZero(hours)}</h1>:
        <h1>${addZero(minutes)}</h1>:
        <h1>${addZero(seconds)}</h1>
    `
    }

    loadTimer()

    function start() {
        if (time) return
        timing()
    }

    function pause() {
        clearInterval(time)
        time = null
    }

    function reset() {
        pause()
        seconds = minutes = hours = 0
        loadTimer()
    }

    function timing() {
        timer.querySelector('.display').style.color = 'black'
        time = setInterval(() => {
            seconds++
            loadTimer()
            verify()
        }, 1000)
    }

    function verify() {
        seconds >= 59 ? minute() : seconds

        function minute() {
            seconds = -1;
            minutes++
            hour()
        }

        function hour() {
            if (minutes > 59) {
                hours++
                minutes = 0
            }
        }
    }

    btStart.addEventListener('click', start)

    btPause.addEventListener('click', pause)

    btReset.addEventListener('click', reset)
}

scope()