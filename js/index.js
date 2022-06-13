const Toggle = document.querySelector(".hamburger")
const Menu = document.querySelector(".MenuContainer")

Toggle.addEventListener("click",()=>{
   Menu.classList.toggle("active")
   Toggle.classList.toggle("active")
})