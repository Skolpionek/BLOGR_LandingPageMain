const DROPDOWNS = document.querySelectorAll(".ListItem")

let flag = false
DROPDOWNS.forEach(DropDown=>{
   DropDown.addEventListener("click",(e)=>{
      DropDown = e.target
      DropDown.classList.toggle("active")
      childs = DropDown.childNodes
      childs.forEach(child=>{
         if(child.classList != undefined){
            if(flag!=false && child!=flag)flag.classList.add("disabled")
            if(child==flag){
               flag.classList.toggle("disabled")
               flag = child
            }
            else{
               flag = child
               flag.classList.remove("disabled") 
            }
            
         }
      })
   })
})