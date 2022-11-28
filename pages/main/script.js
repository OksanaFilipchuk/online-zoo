let petsArr = [{
    "name": "giant pandas",
    "img": "../../assets/img/giant pandas.jpg",
    "native": "Native to Southwest China",
    "meal": "../../assets/logo/banana-bamboo_icon.svg"
  },
  {
    "name": "eagles",
    "img": "../../assets/img/eagles.jpg",
    "native": "Native to South America",
    "meal": "../../assets/logo/meet-fish_icon.svg"
  },
  {
    "name": "cheetahs",
    "img": "../../assets/img/cheetahs.jpg",
    "native": "Native to Africa",
    "meal": "../../assets/logo/meet-fish_icon.svg"
  },
  {
    "name": "gorillas",
    "img": "../../assets/img/gorillas.jpg",
    "native": "Native to Congo",
    "meal": "../../assets/logo/banana-bamboo_icon.svg"
  },
  // {
  //   "name": "two-toes sloth",
  //   "img": "../../assets/img/two-toes.jpg",
  //   "native": "Mesoamerica, South America",
  //   "meal": "../../assets/logo/banana-bamboo_icon.svg"
  // },
  {
    "name": "alligators",
    "img": "../../assets/img/aligators.jpg",
    "native": "Native to Southeastern U. S.",
    "meal": "../../assets/logo/meet-fish_icon.svg"
  },
  {
    "name": "penguins",
    "img": "../../assets/img/penguins.jpg",
    "native": "Native to Antarctica",
    "meal": "../../assets/logo/meet-fish_icon.svg"
  },  
]

let testimonials = [
  {
    "author": "Michael John ",
    "place": "Local Austria",
    "day": "Today",
    "photo": "../../assets/img/author.svg",
    "comment": `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
  },
  {
    "author": "Oskar Samborsky",
    "place": "Local Austria",
    "day": "Yesterday",
    "photo": "../../assets/img/samborsky.jpg",
    "comment": "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for "
  },
  {
    "author": "Oska Samborska",
    "place": "Local Austria",
    "day": "Yesterday",
    "photo": "../../assets/img/oska.png",
    "comment": " Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    "author": "Fredericka Michelin",
    "place": "Local Austria",
    "day": "Yesterday",
    "photo": "../../assets/img/michelin.png",
    "comment": " My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    "author": "Mila Riksha",
    "place": "Local Austria",
    "day": "Yesterday",
    "photo": "../../assets/img/riksha.jpg",
    "comment": "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf "
  },

]
function showCards(){
  let petCards = document.querySelector(".pet-cards")
  petsArr.forEach(el=>{
    let petCard = document.createElement("div");
    petCard.classList.add("pet-card");
    let petCardImg = document.createElement("img");
    petCardImg.classList.add("pet-card-img")
    petCardImg.setAttribute("src", el.img);
    petCardImg.setAttribute("alt", el.name);
    petCard.appendChild(petCardImg);
    let petCardContent = document.createElement("div");
    petCardContent.classList.add("pet-card-content")
    let petCardHeader = document.createElement("h3");
    petCardHeader.textContent = el.name;
    let petCardNative = document.createElement("h6");
    petCardNative.textContent = el.native;
    petCardContent.appendChild(petCardHeader);
    petCardContent.appendChild(petCardNative);
    petCard.appendChild(petCardContent);
    let meal = document.createElement("img");
    meal.classList.add("pet-card-meal")
    meal.setAttribute("src", el.meal);
    meal.setAttribute("alt", "meal");
    petCard.appendChild(meal);
    petCards.appendChild(petCard);

    petCard.addEventListener("mouseenter", event=>{
        event.target.children[1].classList.add("pet-card-content-active");
        event.target.children[0].classList.add("pet-card-img-active");
      })

      petCard.addEventListener("mouseleave", event=>{
        event.target.children[1].classList.remove("pet-card-content-active");
        event.target.children[0].classList.remove("pet-card-img-active");
      })

    })}

function showTestimonials(){
  
  let testimonialsWrapper = document.querySelector(".testimonials-wrapper");
  
  testimonials.forEach(el => {
    let testimonialBlock = document.createElement("div");
    testimonialBlock.classList.add("testimonial");
    let testimonialAuthorPhoto = document.createElement("img");
    testimonialAuthorPhoto.classList.add("testimonial-author-photo");
    testimonialAuthorPhoto.setAttribute("src", el.photo);
    testimonialAuthorPhoto.setAttribute("alt", "author");
    let testimonialAuthor = document.createElement("h3");
    testimonialAuthor.classList.add("testimonial-author");
    testimonialAuthor.textContent = el.author;
    let testimonialAuthorData = document.createElement("h5");
    testimonialAuthorData.classList.add("testimonial-author-data");
    testimonialAuthorData.textContent = el.place + " • " + el.day;
    let testimonialContent = document.createElement("p");
    testimonialContent.classList.add("testimonial-content");
    testimonialContent.innerHTML = el.comment;
    testimonialBlock.appendChild(testimonialAuthorPhoto);
    testimonialBlock.appendChild(testimonialAuthor);
    testimonialBlock.appendChild(testimonialAuthorData);
    testimonialBlock.appendChild(testimonialContent);
    testimonialsWrapper.appendChild(testimonialBlock);
  })

}

document.querySelectorAll(".nav-list-item-link").forEach(el=>
  el.addEventListener("click", function(){
    document.querySelectorAll(".nav-list-item-link-active").forEach(el=>{
      el.classList.remove("nav-list-item-link-active")});    
  }))

window.addEventListener('DOMContentLoaded', showCards);
window.addEventListener('DOMContentLoaded', showTestimonials);
