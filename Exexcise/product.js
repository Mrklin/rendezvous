
 class Product {
    constructor({id, title, price, description, category, image, rating}) {
      
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating || { rate: 0, count: 0 };
    }
    id;
    title;
    price;
    description;
    category;
    image;
    rating = {
        rate: 0,
        count: 0
    }; 
    
    getDiscountedPrice(discountPercentage) {
        if (discountPercentage < 0 || discountPercentage > 100) {
            throw new Error("Discount percentage must be between 0 and 100.");
        }   
        return this.price - (this.price * (discountPercentage / 100));
    }

}


 
 const string = "This is a default export string from product.js";

 const number = 42;

 const boolean = true;

 const obj = { key: "value" };

 export { number, boolean, Product, obj };
 
export default string;