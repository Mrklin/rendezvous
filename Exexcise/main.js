import  Cart , {CartItem, minicart, array1, found} from "./cart.js";
import string,{ Product, number, boolean, obj } from "./product.js";
import Payment,{ Transaction, payment, pTransaction, apiUrl } from "./payment.js";



const main = async() => {
    // Create a new product
    const newProduct = new Product({id:21, title: 'Childrens Casual wears', price: 12.5, description:'loose style, contrast raglan long sleeve, three-button henley placket,', category: 'Children', image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"});
    console.log("New Product:", newProduct); 
    
    // Create a new cart
    const newCart = new Cart({id:1, userId:123, date: new Date(), products: [newProduct]});
    console.log("New Cart:", newCart);

    // Process a payment
    const payment = new Payment({amount: newProduct.price, method: 'Credit Card', status: 'Pending'});
    console.log("Payment:", payment);
    payment.processPayment();
    console.log("Payment after processing:", payment);

    // Handle a transaction
    const transaction = new Transaction({id:1, amount: newProduct.price, date: new Date(), status: 'Pending', paymentMethod: {type: 'Credit Card', details: {cardNumber: '**** **** **** 1234'}}});
    console.log("Transaction:", transaction);
    transaction.processPayment();
    console.log("Transaction after processing:", transaction);
}

main();

// Test minicart and found functions
minicart();
found();