const cart = {
    "p92779": {
        "name": "Мужские часы CASIO G-2900F-8VER",
        "url": "#",
        "image": "./images/casio-g-2900f-8ver_images_1650372917.jpg",
        "price": 1720.00
    },
    "p93039": {
        "name": "Мужские часы CASIO AE-1000W-1AVEF",
        "url": "#",
        "image": "./images/casio-ae-1000w-1avef_images_1675943357.jpg",
        "price": 872.00
    },
    "p63553250": {
        "name": "Наручные часы Casio W-800H-1AVES",
        "url": "#",
        "image": "./images/63553250_images_9154502355.jpg",
        "price": 484.00
    },
    "p93127": {
        "name": "Мужские часы CASIO EF-552-1AVEF",
        "url": "#",
        "image": "./images/casio-ef-552-1avef_images_1583730891.jpg",
        "price": 2880.00
    },
    "p79946990": {
        "name": "Мужские часы Casio EF-527D-1AVEF",
        "url": "#",
        "image": "./images/79946990_images_11571324122.jpg",
        "price": 4238.00
    },
    "p6533206": {
        "name": "Мужские часы CASIO SGW-100-2BER",
        "url": "#",
        "image": "./images/6533206_images_1657626044.jpg",
        "price": 2416.00
    }
}


let out = `<div class ='table-row'>`
for (let key in cart) {
    out += `<div class = 'table-good'>`
    out += `<h4> ${cart[key]["name"]}</h4>`
    out += `<img src ='${cart[key]['image']}' height = 150>`
    out += `<p class = 'font-price'>${cart[key]['price']} RUB</p>`
    out += `<button class = 'send-button' data-articul= ${key}> Купить</button>`
    out += `</div>`
    document.querySelector('.cart-out').innerHTML = out

}
out += `</div>`
let data = {}
let button = document.querySelectorAll('.send-button')
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (event) => {
        let articul = event.target.dataset.articul
        if (data[articul] !== undefined) {
            data[articul]['count']++
        }
        else {
            data[articul] = cart[articul]
            data[articul]['count'] = 1
        }
        localStorage.setItem('cart', JSON.stringify(data))

    })
}





