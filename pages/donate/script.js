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

// amount-bar
document.querySelectorAll(".amount-input").forEach((el) => {
  el.addEventListener("input", (e)=>{
    document.querySelector(".another-amount").value =  e.target.value;
    if(e.target.checked){
      for(let el of e.target.labels[0].parentNode.children){
        el.classList.remove("amount-values-active")
      }
      e.target.labels[0].classList.add("amount-values-active");
    }
  })  
})

document.querySelector(".another-amount").addEventListener("input", (e) => {
  if(e.target.value.length > 4){
    document.querySelectorAll(".amount-input-non-highlight").forEach(el => el.classList.remove("amount-input-non-highlight"))
    e.target.value = e.target.value.slice(0,4); 
  }
  let amounts = document.querySelectorAll(".amount-input");
  let amountsValues = [];
  amounts.forEach(el => {
    amountsValues.push(el.value)
  })
  let index = amountsValues.indexOf(e.target.value);
  if(index > -1){
    amounts[index].checked = "true";
    if(document.querySelector(".amount-values-active")){
      document.querySelector(".amount-values-active").classList.remove("amount-values-active");
    }
    
    document.querySelector(".amount-values").children[index].classList.add("amount-values-active")
  } else if(index === -1){
    amounts.forEach(el => {
      el.checked = "false"  
    })
    document.querySelector("#amount-25").classList.add("amount-25-non-highlight")    
    if(document.querySelector(".amount-values-active")){
      document.querySelector(".amount-values-active").classList.remove("amount-values-active");
    }    
  }
  console.log(index)

})