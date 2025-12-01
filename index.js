import ProService, { Product } from "./proService.js";

console.log("Hello, World!");
console.log("Aloha!");

const eventContainer = document.getElementById("event_container");

// const card =[
//     {
//         id:1,
//         imgSrc:"./assets/Sec2_img1.png",
//         aLink: "./page2.html",
//         titleT:"ISWIS Live show",
//         date: "Sun, Oct 3rd",
//         time: "6PM",
//         info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

//     },
//     {
//         id:2,
//         imgSrc:"./assets/Sec2_img2.png",
//         aLink: "#",
//         titleT:"ISWIS Live show",
//         date: "Sun, Oct 3rd",
//         time: "6PM",
//         info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//         id:3,
//         imgSrc:"./assets/Sec2_img3.png",
//         aLink: "#",
//         titleT:"ISWIS Live show",
//         date: "Sun, Oct 3rd",
//         time: "6PM",
//         info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     }
// ]

const addEventCard = ({id, title,category, description, price, image, rating }) => {

    //crete productCard div
  const productCard = document.createElement("div");

  productCard.className =
    "sm:w-full rounded-xl flex flex-col items-center shadow-sm hover:shadow-xl overflow-hidden text-[.8rem] opacity-80 transition-all duration-300 hover:opacity-100 pb-6 cursor-pointer";

    // productCard image
  const img = document.createElement("img");
  img.src = image ;
  img.alt = "event image";
  img.setAttribute("loading", "lazy");
  img.className = "w-[60%] aspect-square bg-center bg-cover";

  productCard.appendChild(img);

//   productCard for productInfo
  const productInfo = document.createElement("div");
  productInfo.className = "bg-white flex p-5 flex-col gap-2";

//  productInfo span
  const productTitle = document.createElement("span");
  productTitle.className = "flex flex-col gap-1";

//   span p tag
    const titles = document.createElement("p");
    titles.className = "text-[1rem] font-[500]";
    titles.innerText = title;
    //   span p tag ends
    productTitle.appendChild(titles);

    // id span start

    const spanId = document.createElement("span");
    spanId.className= 'text-[.7rem] font-[300] text-gray-500';
    spanId.innerText = `Product ID: ${id}`;
    productTitle.appendChild(spanId);
    // id span ends

    // span div
    const productPrice = document.createElement("div");
    productPrice.className = "flex justify-between items-center gap-1 text-bold text-[1rem]";
    productPrice.innerHTML = `$${price}`;

    // circle <div class="inline-flex w-1 h-1 rounded-full bg-black"></div>
   
    //rating span
    const productRate = document.createElement("span");
    productRate.className = "text-[.7rem] font-[300] text-gray-500 flex justify-center items-center gap-1";
    productRate.innerHTML = `Rating: ${rating.rate} <img src="./assets/Star.svg" alt="star icon" class="w-3 h-3 border-0 inline-block"/> (${rating.count})`;
    productPrice.appendChild(productRate);
    //rating span ends
    // span div ends
    productTitle.appendChild(productPrice);

    const productCategory = document.createElement('p');
    productCategory.className = "text-[.8rem] font-[300] text-gray-500";
    productCategory.innerText = `Product category: ${category}`;
    productTitle.appendChild(productCategory);
    //eventinfo span ends
    productInfo.appendChild(productTitle);

    //eventinfo p tag for text
     const productText = document.createElement("p");
     productText.className = "font-[300] truncate md:whitespace-normal";
     productText.innerText = description;
    // eventinfo  p tag ends

     productInfo.appendChild(productText);

        //eventinfo anchor tag
        const productLink = document.createElement("a");
        productLink.className = "flex gap-1 cursor-pointer items-end text-[#783EAD] hover:opacity-70";
        productLink.href = `event.html?productId=${id}&productCategory=${category}`;
        productLink.addEventListener("click", () => {
            window.location.href = productLink.href;
        });
        

        //achor tag p
        const linkText = document.createElement("p");
        linkText.innerText = "View details";
        productLink.appendChild(linkText);
        //achor tag p ends

        //achor tag img
        const linkImg = document.createElement("img");
        linkImg.src = "./assets/Arrow--up-right.svg";
        linkImg.alt = "arrow icon";
        linkImg.setAttribute("loading", "lazy");
        linkImg.className = "text-[#783EAD]";
        productLink.appendChild(linkImg);
        //achor tag img ends

        //productinfo anchor tag ends
        productInfo.appendChild(productLink);

    //productinfo ends
    productCard.appendChild(productInfo);

    eventContainer.appendChild(productCard);

};


// const FirstImage = addEventCard(card[0]);

// const SecondImage = addEventCard(card[1]);

// const ThirdImage = addEventCard(card[2]);





const proService = new ProService();

const products = await proService.getProductInfo();

const product = products.map((item) => new Product(item));


const display = product.slice(0,6).forEach((item) => addEventCard(item));

console.log(display);





// class ProductService {
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

// const productService = new ProductService();
// productService.getProductById(2).then((data) => console.log(data));
// productService.getProducts().then((data) => console.log(data));
// productService.addProduct();