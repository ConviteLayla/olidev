let btn = document.querySelector(".nav-toggle")
let menuMobile = document.querySelector(".menu-mobile-container")
btn.addEventListener("click", ()=>{
    menuMobile.classList.toggle("active")
})