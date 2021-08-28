class Basket {
    constructor(items) {
        this.items = items
    }

    goodPlus(key) {
        this.items[key]['count']++
    }

    goodMinus(key) {
        if (this.items[key]['count'] - 1 <= 0) {
            this.goodDelete(key)
        }
        else {
            this.items[key]['count'] -= 1
        }
    }

    goodDelete(key) {
        delete this.items[key]

    }

    getTotalPrice() {
        let total = 0
        for (let key in this.items)
            total += this.items[key].count * this.items[key].price
        return total
    }

    render() {
        let table = document.createElement('table')
        table.setAttribute('class', 'table-container')
        for (let key in this.items) {
            let goods = this.items[key]
            let tr = document.createElement('tr')

            // кнопка удалить

            let td = document.createElement('td')
            let button = document.createElement('button')
            button.setAttribute('class', 'button-delete button-features')
            button.textContent = 'X'
            button.setAttribute('data-articule', key)
            td.append(button)
            tr.append(td)


            // картинка

            td = document.createElement('td')
            let img = document.createElement('img')
            img.height = 50
            img.src = goods['image']
            td.append(img)
            tr.append(td)

            // название товара            

            td = document.createElement('td')
            let h4 = document.createElement('h4');
            h4.textContent = goods['name']
            td.append(h4)
            tr.append(td)


            //  кнопка минус

            td = document.createElement('td')
            button = document.createElement('button')   // кнопка минус
            button.setAttribute('class', 'button-minus button-features')
            button.setAttribute('data-articule', key)
            button.textContent = '-'
            td.append(button)
            tr.append(td)

            // колличество товара

            td = document.createElement('td')
            let span = document.createElement('span')
            span.textContent = goods['count']
            td.append(span);
            tr.append(td)


            //  кнопка плюс

            td = document.createElement('td')
            button = document.createElement('button')
            button.setAttribute('class', 'button-plus button-features')
            button.setAttribute('data-articule', key)
            button.textContent = '+'
            td.append(button)
            tr.append(td)

            // стоимость товара

            td = document.createElement('td')
            span = document.createElement('span');
            span.textContent = goods['price'] * goods['count'] + ' Руб'
            td.append(span);
            tr.append(td)
            table.append(tr)

        }

        // общая цена за все товары
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.setAttribute('colspan', 7); // merge 7 td
        td.innerHTML = `<span class ='total'>Total:${this.getTotalPrice()} Руб </span> `
        td.style.textAlign = 'right';
        td.style.padding = '15px 30px 15px 0';
        tr.append(td)
        table.append(tr)

        return table


    }

}

const basket = new Basket
basket.render()