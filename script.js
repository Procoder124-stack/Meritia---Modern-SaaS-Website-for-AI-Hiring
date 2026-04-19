const menuIcon = document.querySelector(".fa-bars")

const closeIcon = document.querySelector(".fa-xmark")

const navMenu = document.querySelector(".navbar ul")

menuIcon.addEventListener("click", ()=>{

    navMenu.classList.add("show")
})

closeIcon.addEventListener("click", ()=>{

    navMenu.classList.remove("show")
})
