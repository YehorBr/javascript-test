// * Працюємо з колекцією товарів в кошику:
// * - getItems()
// * - add(product)
// * - remove(productName)
// * - clear()
// * - countTotalPrice()
// * - increaseQuantity(productName)
// * - decreaseQuantity(productName)
// *
// * { name: '🍎', price: 50 }
// * { name: '🍇', price: 70 }
// * { name: '🍋', price: 60 }
// * { name: '🍓', price: 110 }
// */

const cart = {
    items: [
    ],
    getItems() { console.log(this.items);},
    add(product) {
        const newProduct = {
            ...product,
            quantity: 1,
        }
        for (const item of this.items){
            if(item.name === product.name){
                item.quantity += 1

                return
            }
        }
        this.items.push(newProduct)
    },
    remove(productName) {
        let index;
        for (const item of this.items) {
            if(item === productName){
                index = this.items.indexOf(item)

                this.items.splice(index, 1)
            }
        }
        return this.items
    },
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
    };

    cart.add({ name: '🍎', price: 50 })
    cart.add({ name: '🍇', price: 70 })
    cart.add({ name: '🍋', price: 60 })
    cart.add({ name: '🍓', price: 110 })

// const a = [10, 20];
// const b = [40, 50];
// const c = [...a, ...b]
// console.log(c);
console.log(
Object.keys({a: 5, b:10 }));