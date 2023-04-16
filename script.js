const items = document.querySelectorAll('.item')
function random() {
    return Math.random()
}

items.forEach(element => {
    let sharpening = element.querySelector('.sharpening')

    // Заточка небесным камнем
    let sky = element.querySelector('.sky')
    sky.addEventListener('click', () => {
        let chance = 0
        let history = element.querySelector('.history')
        switch (sharpening.innerText) {
            case '0':
                chance = 0.65
                break;
            case '1':
                chance = 0.45
                break;
            case '2':
                chance = 0.45
                break;
            case '3':
                chance = 0.45
                break;
            case '4':
                chance = 0.45
                break;
            case '5':
                chance = 0.45
                break;
            case '6':
                chance = 0.45
                break;
            case '7':
                chance = 0.45
                break;
            case '8':
                chance = 0.40
                break;
            case '9':
                chance = 0.35
                break;
            case '10':
                chance = 0.27
                break;
            case '11':
                chance = 0.2
                break;
            case '12':
                chance = 0;
                break;
            default:
                console.log('default');
        }

        if (random() < chance) {
            sharpening.innerText++
            history.innerHTML += '<p class="plus">+</p>'
        } else {
            sharpening.innerText = 0
            history.innerHTML += '<p class="minus">0</p>'
        }
    })

    // Заточка подземным камнем
    let underground = element.querySelector('.underground')
    underground.addEventListener('click', () => {

        let chance = 0
        let history = element.querySelector('.history')
        switch (sharpening.innerText) {
            case '0':
                chance = 0.535
                break;
            case '1':
                chance = 0.335
                break;
            case '2':
                chance = 0.335
                break;
            case '3':
                chance = 0.335
                break;
            case '4':
                chance = 0.335
                break;
            case '5':
                chance = 0.335
                break;
            case '6':
                chance = 0.335
                break;
            case '7':
                chance = 0.335
                break;
            case '8':
                chance = 0.285
                break;
            case '9':
                chance = 0.235
                break;
            case '10':
                chance = 0.155
                break;
            case '11':
                chance = 0.085
                break;
            case '12':
                chance = 0;
                break;
            default:
                console.log('default');
        }

        if (sharpening.innerText != '0') {
            if (random() < chance) {
                sharpening.innerText++
                history.innerHTML += '<p class="plus">+</p>'
            } else {
                sharpening.innerText--
                history.innerHTML += '<p class="minus">-</p>'
            }
        } else {
            if (random() < chance) {
                sharpening.innerText++
                history.innerHTML += '<p class="plus">+</p>'
            } else {
                sharpening.innerText = '0'
                history.innerHTML += '<p class="minus">-</p>'
            }
        }
    })

    // Заточка миражом
    let mirage = element.querySelector('.mirage')
    mirage.addEventListener('click', () => {
        let chance = 0
        let history = element.querySelector('.history')
        switch (sharpening.innerText) {
            case '0':
                chance = 0.5
                break;
            case '1':
                chance = 0.3
                break;
            case '2':
                chance = 0.3
                break;
            case '3':
                chance = 0.3
                break;
            case '4':
                chance = 0.3
                break;
            case '5':
                chance = 0.3
                break;
            case '6':
                chance = 0.3
                break;
            case '7':
                chance = 0.3
                break;
            case '8':
                chance = 0.25
                break;
            case '9':
                chance = 0.2
                break;
            case '10':
                chance = 0.12
                break;
            case '11':
                chance = 0.05
                break;
            case '12':
                chance = 0;
                break;
            default:
                console.log('default');
        }
        if (random() < chance) {
            sharpening.innerText++
            history.innerHTML += '<p class="plus">+</p>'
        } else {
            sharpening.innerText = 0
            history.innerHTML += '<p class="minus">0</p>'
        }
    })

    // Заточка камнем мироздания
    let universe = element.querySelector('.universe')
    universe.addEventListener('click', () => {
        let chance = 0
        let history = element.querySelector('.history')
        switch (sharpening.innerText) {
            case '0':
                chance = 1
                break;
            case '1':
                chance = 0.25
                break;
            case '2':
                chance = 0.1
                break;
            case '3':
                chance = 0.04
                break;
            case '4':
                chance = 0.0167
                break;
            case '5':
                chance = 0.0077
                break;
            case '6':
                chance = 0.0047
                break;
            case '7':
                chance = 0.0025
                break;
            case '8':
                chance = 0.0013
                break;
            case '9':
                chance = 0.0007
                break;
            case '10':
                chance = 0.0004
                break;
            case '11':
                chance = 0.0002
                break;
            case '12':
                chance = 0;
                break;
            default:
                console.log('default');
        }
        if (random() < chance) {
            sharpening.innerText++
            history.innerHTML += '<p class="plus">+</p>'
        } else {
            history.innerHTML += '<p class="nothing">=</p>'
        }
    })


    // Заточка камнем дракона (100%)
    let dragon = element.querySelector('.dragon')
    dragon.addEventListener('click', () => {
        let history = element.querySelector('.history')
        if (sharpening.innerText != '12') {
            sharpening.innerText++
            history.innerHTML += '<p class="plus">+</p>'
        }
        else {
            sharpening.innerText = '0'
            history.innerHTML += '<p class="minus">0</p>'
        }
    })
});