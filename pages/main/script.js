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
    "name": "gorillas",
    "img": "../../assets/img/gorillas.jpg",
    "native": "Native to Congo",
    "meal": "../../assets/logo/banana-bamboo_icon.svg"
  },
  {
    "name": "two-toes sloth",
    "img": "../../assets/img/two-toes.jpg",
    "native": "Mesoamerica, South America",
    "meal": "../../assets/logo/banana-bamboo_icon.svg"
  },
  {
    "name": "cheetahs",
    "img": "../../assets/img/cheetahs.jpg",
    "native": "Native to Africa",
    "meal": "../../assets/logo/meet-fish_icon.svg"
  },
  {
    "name": "penguins",
    "img": "../../assets/img/penguins.jpg",
    "native": "Native to Antarctica",
    "meal": "../../assets/logo/meet-fish_icon.svg"
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
    // petCard.appendChild(petCardHeader);
    petCardContent.appendChild(petCardHeader);
    petCardContent.appendChild(petCardNative);
    petCard.appendChild(petCardContent);
    let meal = document.createElement("img");
    meal.classList.add("pet-card-meal")
    meal.setAttribute("src", el.meal);
    meal.setAttribute("alt", "meal");
    petCard.appendChild(meal);
    petCards.appendChild(petCard);
})

}


window.addEventListener('DOMContentLoaded', showCards)
console.log("lll")