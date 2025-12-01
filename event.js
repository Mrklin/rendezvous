import ProService, { Product } from "./proService.js";

const url = new URL(window.location.href);

const params = new URLSearchParams(url.search);

console.log(params.get("productId"));

console.log(params.get("productCategory"));

// const proService = new ProService();

// const products = await proService.getProductInfo();

// const product = products.map((item) => new Product(item));

// const display = product.slice(0,6).forEach((item) => addEventCard(item));

// console.log(display);

const eventCard = document.getElementById("event");

const addEventCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const eventImageDiv = document.createElement("div");
  eventImageDiv.className =
    "w-full h-[60vh] rounded-lg shadow-xl overflow-hidden flex justify-center items-center p-10 ";

  const eventImg = document.createElement("img");
  eventImg.src = image;
  eventImg.alt = "event image";
  eventImg.setAttribute("loading", "lazy");
  eventImg.className = " bg-center h-full ";

  eventImageDiv.appendChild(eventImg);

  eventCard.appendChild(eventImageDiv);

  const eventDiv1 = document.createElement("div");
  eventDiv1.className =
    "flex sm:justify-between flex-col gap-6 sm:flex-row items-center sm:items-end w-full";

  const eventInfo = document.createElement("div");
  eventInfo.className = "flex flex-col gap-3";

  const eventTitle = document.createElement("h2");
  eventTitle.className = "text-2xl font-bold";
  eventTitle.innerText = `Product id: ${id}`;
  eventInfo.appendChild(eventTitle);

  const eventCategoryRating = document.createElement("span");
  eventCategoryRating.className = "flex flex-col gap-4 text-base text-[300]";

  const eventCategory = document.createElement("p");
  eventCategory.className = "text-gray-500";
  eventCategory.innerText = `Category: ${category}`;
  eventCategoryRating.appendChild(eventCategory);

  const eventRating = document.createElement("p");
  eventRating.className =
    "text-gray-500 flex justify-center items-center gap-1";
  eventRating.innerHTML = `Rating: ${rating.rate} <img src="./assets/Star.svg" alt="star icon" class="w-3 h-3 border-0 inline-block"/> (${rating.count})`;
  eventCategoryRating.appendChild(eventRating);

  eventInfo.appendChild(eventCategoryRating);

  eventDiv1.appendChild(eventInfo);

  const eventContact = document.createElement("span");
  eventContact.className = "flex flex-col gap-3";

  const eventContactText = document.createElement("p");
  eventContactText.className = "text-base font-bold";
  eventContactText.innerText = "Contact Organizers";
  eventContact.appendChild(eventContactText);

  const eventContactSpan = document.createElement("span");
  eventContactSpan.className = "flex gap-3";

  const eventContactEmail = document.createElement("img");
  eventContactEmail.src = "./assets/🦆 icon _circle email_.svg";
  eventContactEmail.alt = "email icon";
  eventContactEmail.setAttribute("loading", "lazy");
  eventContactEmail.className =
    "cursor-pointer transition-all duration-400 ease hover:scale-110";
  eventContactSpan.appendChild(eventContactEmail);

  const eventContactX = document.createElement("img");
  eventContactX.src = "./assets/🦆 icon _rounded twitterbird_.svg";
  eventContactX.alt = "x icon";
  eventContactX.setAttribute("loading", "lazy");
  eventContactX.className =
    "cursor-pointer transition-all duration-400 ease hover:scale-110";
  eventContactSpan.appendChild(eventContactX);

  const eventContactInsta = document.createElement("img");
  eventContactInsta.src = "./assets/Insta.svg";
  eventContactInsta.alt = "instagram icon";
  eventContactInsta.setAttribute("loading", "lazy");
  eventContactInsta.className =
    "cursor-pointer transition-all duration-400 ease hover:scale-110";
  eventContactSpan.appendChild(eventContactInsta);

  eventContact.appendChild(eventContactSpan);
  eventDiv1.appendChild(eventContact);
  eventCard.appendChild(eventDiv1);

  const eventDiv2 = document.createElement("div");
  eventDiv2.className =
    "flex justify-between flex-col sm:flex-row items-start gap-12";

  const eventDescDetail = document.createElement("div");
  eventDescDetail.className =
    "text-base font-[300] flex flex-col max-w-[50rem] justify-center sm:justify-start gap-6";

  const eventTitleT = document.createElement("p");
  eventTitleT.className = "font-bold";
  eventTitleT.innerText = title;
  eventDescDetail.appendChild(eventTitleT);

  const eventDesc = document.createElement("p");
  eventDesc.innerText = description;
  eventDescDetail.appendChild(eventDesc);

  const eventPrice = document.createElement("div");
  eventPrice.className = "flex flex-col gap-3";

  const eventTicket = document.createElement("p");
  eventTicket.className = "text-base font-bold";
  eventTicket.innerText = "Tickets Pricing";
  eventPrice.appendChild(eventTicket);

  const eventPriceSpan = document.createElement("span");
  eventPriceSpan.className = "flex gap-10 text-base font-[300]";

  const eventPriceSingle = document.createElement("span");
  const eventPriceSingleP = document.createElement("p");
  eventPriceSingle.className = "text-xl font-medium";
  eventPriceSingleP.innerText = `Single Ticket`;
  eventPriceSingle.appendChild(eventPriceSingleP);

  const eventPriceSingleAmount = document.createElement("p");
  eventPriceSingleAmount.className = "text-2xl font-bold";
  eventPriceSingleAmount.innerText = `$${price}`;
  eventPriceSingle.appendChild(eventPriceSingleAmount);

  eventPriceSpan.appendChild(eventPriceSingle);

  const eventSpanCouple = document.createElement("span");
  const eventPriceCouple = document.createElement("p");
  eventPriceCouple.className = "text-xl font-medium";
  eventPriceCouple.innerText = `Couple Ticket`;
  eventSpanCouple.appendChild(eventPriceCouple);

  const eventPriceCoupleAmount = document.createElement("p");
  eventPriceCoupleAmount.className = "text-2xl font-bold";
  eventPriceCoupleAmount.innerText = `$${price}`;
  eventSpanCouple.appendChild(eventPriceCoupleAmount);

  eventPriceSpan.appendChild(eventSpanCouple);

  eventPrice.appendChild(eventPriceSpan);

  eventDescDetail.appendChild(eventPrice);

  const bookNowBtn = document.createElement("button");
  bookNowBtn.className =
    "hover:bg-white transition-colors ease duration-500 bg-[#783EAD] rounded-[10px] h-[50px] hover:text-[#783EAD] hover:border-1 hover:border-[#783EAD] text-white font-semibold w-[150px] cursor-pointer";
  bookNowBtn.innerText = "Book Now";

  eventDescDetail.appendChild(bookNowBtn);

  eventDiv2.appendChild(eventDescDetail);

  const eventDirection = document.createElement("div");
  eventDirection.className = "flex flex-col gap-6 lg:h-[30rem]";

  const eventDirectionText = document.createElement("p");
  eventDirectionText.className = "text-base font-bold";
  eventDirectionText.innerText = "Directions";
  eventDirection.appendChild(eventDirectionText);

  const eventDescriptionMap = document.createElement("iframe");
  eventDescriptionMap.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.610715601732!2d3.4046532999999997!3d6.4440037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2154b6121d%3A0xbc4db43effc12dad!2sYoruba%20Tennis%20Club%20Onikan%20Lagos!5e0!3m2!1sen!2sng!4v1758207107425!5m2!1sen!2sng";
  eventDescriptionMap.className = "w-full h-full rounded-lg border-0";
  eventDescriptionMap.setAttribute("allowfullscreen", "");
  eventDescriptionMap.setAttribute("loading", "lazy");
  eventDescriptionMap.setAttribute(
    "referrerpolicy",
    "no-referrer-when-downgrade"
  );

  eventDirection.appendChild(eventDescriptionMap);

  eventDiv2.appendChild(eventDirection);

  eventCard.appendChild(eventDiv2);
};

// const productContainer = document.getElementById("product-container");

//   const  addEventCard = ({id, title, price, description, category, image, rating}) => {

//     //product card container
//     const miniImg = document.createElement("div");
//     miniImg.className = "py-3 px-8 rounded-lg shadow flex flex-col gap-6 items-center justify-center";

//     const miniImg1 = document.createElement("div");
//     miniImg1.className = "w-full rounded-lg p-2 shadow-sm hover:shadow-xl opacity-80 transition-all duration-300 hover:opacity-100 cursor-pointer flex flex-col items-center justify-center";

//     const img1 = document.createElement("img");
//     img1.src = image ;
//     img1.alt = "mini image";
//     img1.setAttribute("loading", "lazy");
//     img1.className = "w-16 h-16 rounded-full bg-center bg-cover border-2 border-[#783EAD]";

//     miniImg1.appendChild(img1);

//     const minitext = document.createElement("p");
//     minitext.className = "text-[.7rem] font-[500] text-center";
//     minitext.innerText = `sm`;

//     miniImg1.appendChild(minitext);

//     miniImg.appendChild(miniImg1);

//     const miniImg2 = document.createElement("div");
//     miniImg2.className = "w-full rounded-lg p-2 shadow-sm hover:shadow-xl opacity-80 transition-all duration-300 hover:opacity-100 cursor-pointer flex flex-col items-center justify-center";
//     const img2 = document.createElement("img");
//     img2.src = image ;
//     img2.alt = "mini image";
//     img2.setAttribute("loading", "lazy");
//     img2.className = "w-16 h-16 rounded-full bg-center bg-cover border-2 border-[#783EAD]";
//     miniImg2.appendChild(img2);

//     const minitext2 = document.createElement("p");
//     minitext2.className = "text-[.7rem] font-[500] text-center";
//     minitext2.innerText = `md`;
//     miniImg2.appendChild(minitext2);

//     miniImg.appendChild(miniImg2);

//     const miniImg3 = document.createElement("div");
//     miniImg3.className = "w-full rounded-lg p-2 shadow-sm hover:shadow-xl  opacity-80 transition-all duration-300 hover:opacity-100 cursor-pointer flex flex-col items-center justify-center";
//     const img3 = document.createElement("img");
//     img3.src = image ;
//     img3.alt = "mini image";
//     img3.setAttribute("loading", "lazy");
//     img3.className = "w-16 h-16 rounded-full bg-center bg-cover border-2 border-[#783EAD]";
//     miniImg3.appendChild(img3);

//     const minitext3 = document.createElement("p");
//     minitext3.className = "text-[.7rem] font-[500] text-center";
//     minitext3.innerText = `lg`;
//     miniImg3.appendChild(minitext3);

//     miniImg.appendChild(miniImg3);

//     const miniImg4 = document.createElement("div");
//     miniImg4.className = "w-full rounded-lg p-2 shadow-sm hover:shadow-xl  opacity-80 transition-all duration-300 hover:opacity-100 cursor-pointer flex flex-col items-center justify-center";
//     const img4 = document.createElement("img");
//     img4.src = image ;
//     img4.alt = "mini image";
//     img4.setAttribute("loading", "lazy");
//     img4.className = "w-16 h-16 rounded-full bg-center bg-cover border-2 border-[#783EAD]";
//     miniImg4.appendChild(img4);

//     const minitext4 = document.createElement("p");
//     minitext4.className = "text-[.7rem] font-[500] text-center";
//     minitext4.innerText = `xl`;
//     miniImg4.appendChild(minitext4);
//     miniImg.appendChild(miniImg4);

//     productContainer.appendChild(miniImg);

//     //crete productCard div
//   const productCard = document.createElement("div");

// //shadow-sm hover:shadow-xl overflow-hidden opacity-80 transition-all duration-300 hover:opacity-100 cursor-pointer

//   productCard.className ="sm:w-[50%]  max-w-[30rem] rounded-xl shadow-sm flex flex-col justify-start items-center p-4 ";

//     // productCard image
//   const img = document.createElement("img");
//   img.src = image ;
//   img.alt = "event image";
//   img.setAttribute("loading", "lazy");
//   img.className = "w-[30%] aspect-square bg-center bg-cover";

//   productCard.appendChild(img);

// //   productCard for productInfo
//   const productInfo = document.createElement("div");
//   productInfo.className = "bg-white flex p-5 flex-col gap-2";

// //  productInfo span
//   const productTitle = document.createElement("span");
//   productTitle.className = "flex flex-col gap-1";

// //   span p tag
//     const titles = document.createElement("p");
//     titles.className = "text-[1rem] font-[500]";
//     titles.innerText = title;
//     //   span p tag ends
//     productTitle.appendChild(titles);

//     // id span start

//     const spanId = document.createElement("span");
//     spanId.className= 'text-[.7rem] font-[300] text-gray-500';
//     spanId.innerText = `Product ID: ${id}`;
//     productTitle.appendChild(spanId);
//     // id span ends

//     // span div
//     const productPrice = document.createElement("div");
//     productPrice.className = "flex justify-between items-center gap-1 text-bold text-[1rem]";
//     productPrice.innerHTML = `$${price}`;

//     // circle <div class="inline-flex w-1 h-1 rounded-full bg-black"></div>

//     //rating span
//     const productRate = document.createElement("span");
//     productRate.className = "text-[.7rem] font-[300] text-gray-500 flex justify-center items-center gap-1";
//     productRate.innerHTML = `Rating: ${rating.rate} <img src="./assets/Star.svg" alt="star icon" class="w-3 h-3 border-0 inline-block"/> (${rating.count})`;
//     productPrice.appendChild(productRate);
//     //rating span ends
//     // span div ends
//     productTitle.appendChild(productPrice);

//     const productCategory = document.createElement('p');
//     productCategory.className = "text-[.8rem] font-[300] text-gray-500";
//     productCategory.innerText = `Product category: ${category}`;
//     productTitle.appendChild(productCategory);
//     //eventinfo span ends
//     productInfo.appendChild(productTitle);

//     //eventinfo p tag for text
//      const productText = document.createElement("p");
//      productText.className = "font-[300] truncate md:whitespace-normal";
//      productText.innerText = description;
//     // eventinfo  p tag ends

//      productInfo.appendChild(productText);

//         //eventinfo anchor tag

//         const buttonDiv = document.createElement("div");
//         buttonDiv.className = "flex gap-4 mt-6 justify-between items-center";

//         const addToCartBtn = document.createElement("button");
//         addToCartBtn.className = "bg-[#783EAD] text-white px-4 py-2 rounded-lg hover:opacity-70 transition-opacity duration-300 cursor-pointer";
//         addToCartBtn.innerText = "Add to Cart";
//         buttonDiv.appendChild(addToCartBtn);

//         const buyNowBtn = document.createElement("button");
//         buyNowBtn.className = "bg-[#FF6F61] text-white px-4 py-2 rounded-lg hover:opacity-70 transition-opacity duration-300 cursor-pointer";
//         buyNowBtn.innerText = "Buy Now";
//         buttonDiv.appendChild(buyNowBtn);

//         productInfo.appendChild(buttonDiv);

//         // const productLink = document.createElement("a");
//         // productLink.className = "flex gap-1 cursor-pointer items-end text-[#783EAD] hover:opacity-70";
//         // productLink.href = `event.html?productId=${id}`;
//         // productLink.addEventListener("click", () => {
//         //     window.location.href = productLink.href;
//         // });

//         // //achor tag p
//         // const linkText = document.createElement("p");
//         // linkText.innerText = "View details";
//         // productLink.appendChild(linkText);
//         // //achor tag p ends

//         // //achor tag img
//         // const linkImg = document.createElement("img");
//         // linkImg.src = "./assets/Arrow--up-right.svg";
//         // linkImg.alt = "arrow icon";
//         // linkImg.setAttribute("loading", "lazy");
//         // linkImg.className = "text-[#783EAD]";
//         // productLink.appendChild(linkImg);
//         // //achor tag img ends

//         // //productinfo anchor tag ends
//         // productInfo.appendChild(productLink);

//     //productinfo ends
//     productCard.appendChild(productInfo);

//     productContainer.appendChild(productCard);
// }

const proService = new ProService();
const products = await proService.getProductById(params.get("productId"));

const product = new Product(products);

addEventCard(product);

console.log(product);

// const categoryContainer = document.getElementById("category-container");

// const addCategory = async({image, title, rating}) => {

//     const categoryCard = document.createElement("div");
//     categoryCard.className = "sm:h-[14rem] w-full rounded-xl shadow-sm hover:shadow-xl opacity-80 transition-all duration-300 hover:opacity-100 cursor-pointer flex flex-col justify-between items-center p-4  ";

//     const categoryImg = document.createElement("img");
//     categoryImg.src = image ;
//     categoryImg.alt = "event image";
//     categoryImg.setAttribute("loading", "lazy");
//     categoryImg.className = "w-[30%] aspect-square bg-center bg-cover";
//     categoryCard.appendChild(categoryImg);

//     const categoryInfo = document.createElement("div");
//     categoryInfo.className = "bg-white flex p-3 flex-col gap-2";

//     const categoryTitle = document.createElement("span");
//     categoryTitle.className = "flex flex-col gap-1";
//     const titles = document.createElement("p");
//     titles.className = "text-[.8rem] font-[500]";
//     titles.innerText = title;
//     categoryTitle.appendChild(titles);

//     const categoryRate = document.createElement("span");
//     categoryRate.className = "text-[.7rem] font-[300] text-gray-500 flex justify-center items-center gap-1";
//     categoryRate.innerHTML = `Rating: ${rating.rate} <img src="./assets/Star.svg" alt="star icon" class="w-3 h-3 border-0 inline-block"/> (${rating.count})`;
//     categoryTitle.appendChild(categoryRate);

//     categoryInfo.appendChild(categoryTitle);

//     categoryCard.appendChild(categoryInfo);

//     categoryContainer.appendChild(categoryCard);

// }

// const proCategories = await proService.getProductByCategory(params.get("productCategory"));
// // const proCategory =  new Product(proCategories);
// const displayCategory = proCategories.slice(0,5).forEach((item) => addCategory(item));

// console.log(displayCategory);

// const getProductByCategory = async(category) => {
//     const products = await proService.getProductByCategory(category);
//     const product = products.map((item) => new Product(item));
//     const display = product.slice(0,6).forEach((item) => addCategory(item));
//     console.log(display);
// }

// console.log(getProductByCategory('jewelery'));
