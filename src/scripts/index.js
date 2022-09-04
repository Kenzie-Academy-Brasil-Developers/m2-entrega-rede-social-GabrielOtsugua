function addEventButtons() {

    let buttonDesktop = document.querySelector(".btnAsideDesktop")
    let buttonMobile = document.querySelector(".btnAsideMobile")
    let buttonPost = document.querySelector(".postButton")
    let buttonClose = document.querySelector(".modalIndexButton")

    buttonDesktop.addEventListener("click", e => {
        
        buttonDesktop.classList.toggle("followButton-2")
        
        if (buttonDesktop.classList.contains("followButton-2")) {
            buttonDesktop.innerHTML = "Seguindo"
        }
        else {
            buttonDesktop.innerHTML = "Seguir"
        }
    })
    
    buttonMobile.addEventListener("click", () => {

        changeClass(buttonMobile, "followButton-1", "followButton-2")
        
        buttonMobile.innerHTML = "Seguindo"
    })

    buttonPost.addEventListener("click", () => {
        
        document.querySelector(".modal-wrapper").style.display = "block"
    })
    
    buttonClose.addEventListener("click", () => {
        
        document.querySelector(".modal-wrapper").style.display = "none"
    })
}
addEventButtons()


function changeLikeImg() {

    let likeImg = document.querySelector(".likeButton")
    let heartRed = "src/assets/heartRed.png"
    let heartBlack = "src/assets/heartBlack.png"
    
    likeImg.addEventListener("click", () => {

        likeImg.src = heartRed

        let change = heartBlack
        heartBlack = heartRed
        heartRed = change
    })
}
changeLikeImg()