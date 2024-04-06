const duration = 6000;


function updateTimer() {
    const timerElement = document.getElementById('timer')
    const congratsElement = document.getElementById('congrats')


    const now = new Date().getTime();
    const endTime = now + duration;


    const interval = setInterval(() => {

        const remaining = endTime - new Date().getTime()


        if (remaining <= 0) {
            clearInterval(interval)

            timerElement.style.display = 'none'
            congratsElement.style.display = 'block'
        } else {
            const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((remaining % (1000 * 60)) / 1000)


            timerElement.innerText = `${minutes}:${seconds<10 ? '0' : ''} ${seconds}`
        }

    }, 1000);

}

window.onload = updateTimer