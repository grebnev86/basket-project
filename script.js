
if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'))

    let basket = new Basket(cart)
    console.log(basket);
    const cartOut = document.querySelector('.cart-out')
    cartOut.innerHTML = ''
    cartOut.append(basket.render())

    function f() {
        cartOut.innerHTML = ''
        cartOut.append(basket.render())
        localStorage.setItem('cart', JSON.stringify(basket.items))
    }

    cartOut.addEventListener('click', (event) => {
        let target = event.target
        if (target.classList.contains('button-delete')) {
            basket.goodDelete(target.dataset['articule'])
            f()
        }

        if (target.classList.contains('button-minus')) {
            basket.goodMinus(target.dataset['articule'])
            f()
        }

        if (target.classList.contains('button-plus')) {
            basket.goodPlus(target.dataset['articule'])
            f()
        }

    })



}


