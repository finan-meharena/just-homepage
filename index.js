const lightButton = document.querySelector(".light")
const hero = document.querySelector(".hero")
const onBulb = document.querySelector(".on-img")
const maineElement = document.querySelector(".main")


lightButton.addEventListener('click', ()=>{
    hero.classList.toggle('light-change')
    onBulb.classList.toggle("switch-on")
    onBulb.classList.toggle("shake")
    maineElement.classList.toggle("change-body-color")
})