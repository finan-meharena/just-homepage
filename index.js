const lightButton=document.querySelector(".light")

const mainElement = document.querySelector(".main")


lightButton.addEventListener('click', ()=>{
    mainElement.classList.toggle("light-change") 
})