let petsToShow = new Set();
let petsData = [];

function formPetsData(data) {
  data.forEach(el => petsData.push(el));  
  appendCardsBlocks()
}

function formPetCards(){
  shuffleCards();
  let petCards = document.createElement("div");
  petCards.classList = "pet-cards";
  petsToShow.forEach(el => {
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

    petCard.addEventListener("mouseenter", event=>{
        event.target.children[1].classList.add("pet-card-content-active");
        event.target.children[0].classList.add("pet-card-img-active");
      })

    petCard.addEventListener("mouseleave", event=>{
      event.target.children[1].classList.remove("pet-card-content-active");
      event.target.children[0].classList.remove("pet-card-img-active");
    })

    petCards.appendChild(petCard);

  })
  return petCards
}

function shuffleCards(){
  petsToShow.clear();
  while(petsToShow.size < 7){
    let randomNumber = Math.floor(Math.random()*7)
    petsToShow.add(petsData[randomNumber])
  }
}
function appendCardsBlocks(){
  document.querySelector(".carousel-wrapper").appendChild(formPetCards());
  document.querySelector(".carousel-wrapper").appendChild(formPetCards());
  document.querySelector(".carousel-wrapper").appendChild(formPetCards());
}

function showTestimonials(data){
  let testimonialsWrapper = document.querySelector(".testimonials-wrapper");
  
  data.forEach((el, index) => {
    if(index < 11){
    let testimonialBackground = document.createElement("div");
    testimonialBackground.classList.add("testimonial-background");
    let testimonialBlock = document.createElement("div");
    testimonialBlock.classList.add("testimonial");
    testimonialBlock.addEventListener("click", showPopUp);
    testimonialBackground.appendChild(testimonialBlock);    
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
    let closeButton = document.createElement("div");
    closeButton.classList = "pop-up-close-button";
    closeButton.addEventListener("click", closePopUp)  
    testimonialBlock.appendChild(testimonialAuthorPhoto);
    testimonialBlock.appendChild(testimonialAuthor);
    testimonialBlock.appendChild(testimonialAuthorData);
    testimonialBlock.appendChild(testimonialContent);
    testimonialBlock.appendChild(closeButton);
    testimonialsWrapper.appendChild(testimonialBackground);
    }
  })
}

fetch('pets.json')
.then(response => {
	return response.json();
})
.then(data => {
	formPetsData(data);
})

fetch('testimonials.json')
.then(response => {
	return response.json();
})
.then(data => {
	showTestimonials(data);
})

// burger
function changeMenuToBurger() {
  document.querySelector(".burger-background").classList.toggle("burger-active");
  document.body.classList.toggle("hidden");
  document.querySelector(".burger-button").classList.toggle("burger-button-active");
  document.querySelector(".burger-line1").classList.toggle("burger-button-line1-active");
  document.querySelector(".burger-line2").classList.toggle("burger-button-line2-active");
  document.querySelector(".burger-line3").classList.toggle("burger-button-line3-active");
}
let burgerButton = document.querySelector(".burger-button");

burgerButton.addEventListener("click", () =>{
  changeMenuToBurger();
  if(!Boolean(document.querySelector(".burger-designed"))){
    let designedBurger = document.createElement("span");
    designedBurger.innerHTML = `<a href = 'https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks' 
                                  class='nav-list-item-link burger-item burger-designed'
                                  target="_blank">
                                  Designed by ©
                                </a>`;
    document.querySelector(".burger-nav-list").appendChild(designedBurger)
  }
  return
})
window.addEventListener("click", (e)=>{
  if(e.target === document.querySelector(".burger-background")){
    changeMenuToBurger();
  }
})

// pop-up
function showPopUp(event) {
  if(window.innerWidth <= 768){
    event.currentTarget.parentNode.classList.add("pop-up-background");
    event.currentTarget.classList.add("pop-up-testimonial");
    document.body.classList.add("hidden");
    event.currentTarget.children[3].classList.add("testimonial-content-full");
    event.currentTarget.children[4].classList.add("pop-up-close-button-visible");
  }
}
function closePopUp(e){
  e.target.parentNode.classList.remove("pop-up-testimonial");
  e.currentTarget.parentNode.parentNode.classList.remove("pop-up-background");
  document.body.classList.remove("hidden");
  e.currentTarget.previousSibling.classList.remove("testimonial-content-full");
  e.stopPropagation()
}

//pet-carousel
function moveRight(){
  document.querySelector(".pets-carousel-button-left").removeEventListener("click", moveRight);
  document.querySelector(".carousel-wrapper").children[1].style.left = "100%";
  document.querySelector(".carousel-wrapper").children[0].style.left = "0";
  document.querySelector(".carousel-wrapper").children[2].remove()
  document.querySelector(".carousel-wrapper").prepend(formPetCards());

  setTimeout(()=>{
    document.querySelector(".pets-carousel-button-left").addEventListener("click", moveRight);
    document.querySelector(".carousel-wrapper").children[2].remove();
    document.querySelector(".carousel-wrapper").append(formPetCards());
  }, 1000)
}
document.querySelector(".pets-carousel-button-left").addEventListener("click", moveRight);

function moveLeft(){
  document.querySelector(".pets-carousel-button-right").removeEventListener("click", moveLeft);
  
  document.querySelector(".carousel-wrapper").children[1].style.left = "-100%";
  document.querySelector(".carousel-wrapper").children[2].style.left = "0";
  document.querySelector(".carousel-wrapper").children[0].remove();  
  document.querySelector(".carousel-wrapper").append(formPetCards());

  setTimeout(()=>{
    document.querySelector(".carousel-wrapper").children[0].remove();  
    document.querySelector(".carousel-wrapper").prepend(formPetCards());
    document.querySelector(".pets-carousel-button-right").addEventListener("click", moveLeft);
  }, 1000)
}
document.querySelector(".pets-carousel-button-right").addEventListener("click", moveLeft);

//testimonial carousel
document.querySelector("input[type='range']").addEventListener("input", (event) => {
  let wrapper = document.querySelector(".testimonials-wrapper");
  let target = event.currentTarget;
  let step = wrapper.children[0].offsetWidth + 30;
  console.log(document.documentElement.clientWidth)
  if(document.documentElement.clientWidth  > 1280){
    document.querySelector("input[type='range']").setAttribute("max", "7")
  }
    wrapper.style.left = `${-target.value * step}px`;
})