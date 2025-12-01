export default class Cart {
    constructor({ id, userId, date, products }) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.products = products || [];
    }

    id;
    userId;
    date;
    products = [];

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }

    getTotalAmount() {
        return this.products.reduce((total, product) => total + (product.price || 0), 0);
    }
}

export class CartItem {
    constructor({ productId, quantity }) {
        this.productId = productId;
        this.quantity = quantity || 1;
    }
    productId;
    quantity = 1;

}

export const minicart = () => { new Cart({ id: 1, userId: 123, date: new Date(), products: [] });
console.log(minicart);

}

export const array1= [5, 12, 8, 130, 44];

export const found = ()  => {array1.find(element => element > 10);
console.log(found);
}