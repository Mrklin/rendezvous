

class Product {
  constructor({ id, title, price, description, category, image }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
  }
  id;
  title;
  price;
  description;
  category;
  image;

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


const forthProduct = new Product({
  id: 4,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket for a stylish look.",
  category: "Mens",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
});

// console.log(forthProduct);

// console.log(forthProduct.confirmOrder());

class ProductService extends Product {
  constructor({ id, title, price, description, category, image }) {
    super({ id, title, price, description, category, image });
  }

  getProductInfo() {
    console.log(`The product ${this.title} `);
  }

  getProductById(id) {
    this.id === id ? console.log(this) : null;
  }
  addProductToCart(id) {
    this.id == id
      ? console.log(`${this.title} has been added to your cart.`)
      : null;
  }

  deleteProduct(id) {
    this.id === id
      ? console.log(`${this.title} has been removed from your cart.`)
      : null;
  }

  updateProduct(newDetails) {
    Object.assign(this.id, newDetails);
    console.log(
      `product with id:${this.id} and name ${this.title} has been updated.`
    );
  }
}

const fifthProduct = new ProductService({
  id: 4,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket for a stylish look.",
  category: "Mens",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
});

const sixthProduct = new ProductService({
  id: 5,
  title: "Womens Casual Premium Slim Fit T-Shirts ",
  price: 18.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket for a stylish look.",
  category: "Womens",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
});

// fifthProduct.getProductInfo();
// fifthProduct.getProductById(4);
fifthProduct.addProductToCart();
sixthProduct.updateProduct({id:5, price:25.0});
fifthProduct.deleteProduct(4);



class ProService {
   #accessApi = async({id = '', method="GET", body = null}) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`,{
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
    
    console.log(response);
    return response
  }

  updateProduct = async(id)=> {
    
    console.log(`Product has been added to your cart.`);
  }

  deleteProduct= async(id)=> {
    const responce = await this.#accessApi({id:id,method:'POST'});
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



const proService = new ProService();
proService.getProductInfo();
proService.getProductById(4);
proService.deleteProduct(7);
proService.addProduct();




// proService.updateProduct(4);

// const fetchProducts = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const products = await response.json();
//     console.log(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// };

// fetchProducts();


// fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(data => console.log(data));



// class ResourceService {
//   #handlePromise = async ({ url = '', method = "GET", body = null }) => {
//     const response = await fetch(`https://fakestoreapi.com/products/${url}`, {
//       method,
//       body: body ? JSON.stringify(body) : null,
//     });
//     return await response.json();
//   };
//   getProductById = async (id) => {
//     const response = await this.#handlePromise({ url: id });
//     return response;
//   };
//   getProducts = async () => {
//     const response = await this.#handlePromise({});
//     return response;
//   };
//   addProduct = async () => {
//     const product = {
//       title: "new product",
//       price: 13.5,
//       description: "lorem ipsum set",
//       image: "https://i.pravatar.cc",
//       category: "electronic",
//     };
//     const response = await this.#handlePromise({
//       method: "POST",
//       body: product,
//     });
//     console.log(response);
//   };
//   deleteProduct = () => {};
// }

// const productService = new ResourceService();
// productService.getProductById(2).then((data) => console.log(data));
// productService.getProducts().then((data) => console.log(data));
// productService.addProduct();

