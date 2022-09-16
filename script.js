var span = document.getElementById('changename')

var arr = ['Juniela', 'Pelesco', 'Bautista']

function handleClicks() {
    switch (span.innerText) {
        case arr[0]:
            span.innerText = arr[1]
            break
        case arr[1]: 
            span.innerText = arr[2]
            break
        default:
            span.innerText = arr[0]
            break
    }
}

span.addEventListener('click', handleClicks);