document.querySelectorAll(".nav-list-item-link").forEach(el=>
    el.addEventListener("click", function(){
      document.querySelectorAll(".nav-list-item-link-active").forEach(el=>{
        el.classList.remove("nav-list-item-link-active")});    
    }))