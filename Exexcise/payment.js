export default class Payment {
    constructor({amount, method, status = 'pending', transactionId = null}) {
        this.amount = amount;
        this.method = method;
        this.status = status || 'pending';
        this.transactionId = transactionId;
    }
    amount;
    method ={
        type : {card: 'Credit Card', bank: 'Bank Transfer', paypal: 'PayPal'}, 
        details: {}
    };
    status = 'pending';
    transactionId ;

    processPayment() { 
      
        console.log(`Processing payment of $${this.amount} via ${this.method.type || 'Unknown Method'}`);
        this.status = 'completed';
        this.transactionId = `TXN${Math.floor(Math.random() * 1000000)}`;

    }

}

export class Transaction {
    constructor({id, amount, date = new Date(), status = 'pending', paymentMethod}) {
        this.id = id;
        this.amount = amount;
        this.date = date || new Date();
        this.status = status || 'pending';
        this.paymentMethod = paymentMethod || {};
    }
    id;
    amount;
    date = new Date();
    status = 'pending';
    paymentMethod = {};

    processPayment() {
        // Simulate payment processing logic
        console.log(`Processing payment of $${this.amount} via ${this.paymentMethod.type || 'Unknown Method'}`);
        this.status = 'completed';
        this.transactionId = `TXN${Math.floor(Math.random() * 1000000)}`;
    }

    refundPayment() {
        if (this.status !== 'completed') {
            console.log('Only completed transactions can be refunded.');
            return;
        }
        console.log(`Refunding payment of $${this.amount} for transaction ${this.id}`);
        this.status = 'refunded';
    }
}

// Example usage
 const payment = () =>{ new Payment({amount: 100.0, method: {type: 'Credit Card', details: {cardNumber: '**** **** **** 1234'}}});
console.log(payment);

payment.processPayment();
console.log(payment); } 

 const pTransaction = () => { new Transaction({id: 1, amount: 100.0, paymentMethod: {type: 'Credit Card', details: {cardNumber: '**** **** **** 1234'}}});
pTransaction.processPayment();
console.log(pTransaction); }

const apiUrl = 'https://fakestoreapi.com/';

export{ apiUrl, payment, pTransaction };