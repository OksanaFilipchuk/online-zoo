document.querySelectorAll(".nav-list-item-link").forEach(el=>
    el.addEventListener("click", function(){
      document.querySelectorAll(".nav-list-item-link-active").forEach(el=>{
        el.classList.remove("nav-list-item-link-active")});    
    }))

document.querySelectorAll(".amount-input").forEach((el) => {
  el.addEventListener("change", (e)=>{
    if(e.target.checked){
      for(let el of e.target.labels[0].parentNode.children){
        el.classList.remove("amount-values-active")
      }
      e.target.labels[0].classList.add("amount-values-active");
    }
  })  
})