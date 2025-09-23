console.log("Hello, World!");
console.log("Aloha!");





const eventContainer = document.getElementById("event_container");


const card =[
    {
        id:1,
        imgSrc:"./assets/Sec2_img1.png",
        aLink: "./page2.html",
        titleT:"ISWIS Live show",
        date: "Sun, Oct 3rd",
        time: "6PM",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        
    },
    {
        id:2,
        imgSrc:"./assets/Sec2_img2.png",
        aLink: "#",
        titleT:"ISWIS Live show",
        date: "Sun, Oct 3rd",
        time: "6PM",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id:3,
        imgSrc:"./assets/Sec2_img3.png",
        aLink: "#",
        titleT:"ISWIS Live show",
        date: "Sun, Oct 3rd",
        time: "6PM",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]

const addEventCard = (card) => {

    //crete eventcard div
  const eventCard = document.createElement("div");

  eventCard.className =
    "sm:w-1/3 rounded-xl shadow-sm hover:shadow-xl overflow-hidden text-[.8rem] opacity-80 transition-all duration-300 hover:opacity-100 pb-6 cursor-pointer";

    // eventcard image
  const img = document.createElement("img");
  img.src = card.imgSrc ;
  img.alt = "event image";
  img.setAttribute("loading", "lazy");
  img.className = "w-full object-cover";

  eventCard.appendChild(img);

//   eventCard for eventinfo
  const eventInfo = document.createElement("div");
  eventInfo.className = "bg-white flex p-5 flex-col gap-4";

//  eventinfo span
  const eventTitle = document.createElement("span");
  eventTitle.className = "flex flex-col gap-1";

//   span p tag
    const title = document.createElement("p");
    title.className = "text-[1rem] font-[500]";
    title.innerText = card.titleT;
    //   span p tag ends
    eventTitle.appendChild(title);

    // span div
    const dateTime = document.createElement("div");
    dateTime.className = "flex items-center gap-1";
    dateTime.innerHTML = `${card.date} <div class="inline-flex w-1 h-1 rounded-full bg-black"></div> ${card.time}`;
    // span div ends
    eventTitle.appendChild(dateTime);
    //eventinfo span ends
    eventInfo.appendChild(eventTitle);

    //eventinfo p tag for text
     const eventText = document.createElement("p");
     eventText.className = "font-[300] truncate md:whitespace-normal";
     eventText.innerText = card.info;
    // eventinfo  p tag ends
    
     eventInfo.appendChild(eventText);

        //eventinfo anchor tag
        const eventLink = document.createElement("a");
        eventLink.className = "flex gap-1 cursor-pointer items-end text-[#783EAD] hover:opacity-70";
        eventLink.href = card.aLink;

        //achor tag p
        const linkText = document.createElement("p");
        linkText.innerText = "View details";
        eventLink.appendChild(linkText);
        //achor tag p ends

        //achor tag img
        const linkImg = document.createElement("img");
        linkImg.src = "./assets/Arrow--up-right.svg";
        linkImg.alt = "arrow icon";
        linkImg.setAttribute("loading", "lazy");
        linkImg.className = "text-[#783EAD]";
        eventLink.appendChild(linkImg);
        //achor tag img ends

        //eventinfo anchor tag ends
        eventInfo.appendChild(eventLink);

    //eventinfo ends
    eventCard.appendChild(eventInfo);
    
    eventContainer.appendChild(eventCard);
    
};


const FirstImage = addEventCard(card[0]);

const SecondImage = addEventCard(card[1]);

const ThirdImage = addEventCard(card[2]);
