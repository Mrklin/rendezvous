
export default class ProService {
   #accessApi = async({path = 'products',id = '', method="GET", body = null}) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/${path}/${id}`,{
         method,
         body: body ? JSON.stringify(body):null
     });
        if (!response.ok) {
            throw new Error (`HTTP Error: ${response.status}, ${response.statusText}`); 
        }
        const products = await response.json();
        // console.log(products);
        return products;
      } catch (error) {
        console.log('An error occurred while fetching products.');
        // console.error( error.message);
      }
    
  }
  getProductInfo  = async() => {
    const response = await this.#accessApi({});
    console.log(response);
       
    return response; 
  }

  getProductById = async(id) => {
    const response = await this.#accessApi({id:id})
    
    // console.log(response);
    return response
  }

  getProductByCategory = async(category) => {
    const response = await this.#accessApi({path:`products/category/${category}`}) 
    return response
  }

  updateProduct = async(id)=> {
    
    console.log(`Product has been added to your cart.`);
  }

  deleteProduct= async(id)=> {
    const responce = await this.#accessApi({id:id, method:'DELETE'});
    console.log(`product with id:${id} has been removed .`);
    
  }

  addProduct = async()=> {
    const newProduct ={
        title: 'Childrens Casual wears',
        price: 12.5,
        description:'loose style, contrast raglan long sleeve, three-button henley placket,',
        category: 'Children',
        image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    }
    const response = await this.#accessApi({ method:'POST', body:newProduct})
    console.log(response);
  }
}


export class Product {
  constructor({ id, title, price, description, category, image, rating }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating||{rate:0, count:0};
  }
  id;
  title;
  price;
  description;
  category;
  image;
  rating ={
    rate: 0,
    count: 0,
  }

  
  #categoryName = {
    Mens: "mens_clothing",
    Womens: "womens_clothing",
    Children: "childrens_clothing",
    Jewelery: "jewelery",
    Electronics: "electronics",
  };

  confirmOrder() {
    return `Order confirmed for ${this.title} of catergory ${
      this.#categoryName[this.category]
    } at $${this.price}. Thank you for shopping with us!`;
  }
}