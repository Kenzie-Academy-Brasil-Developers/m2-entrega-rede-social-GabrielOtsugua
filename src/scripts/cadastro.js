import { Api } from "./models/api.js"

function creatAccount() {
    
    const username = document.querySelector(".username")
    const email = document.querySelector(".email")
    const password = document.querySelector(".password")
    const work = document.querySelector(".work")
    const image = document.querySelector(".image")
    const button = document.querySelector(".primaryButton-1")

    button.addEventListener("click", () => {

        const data = {
            username: username.value,
            email: email.value,
            password: password.value,
            work_at: work.value,
            image: image.value
        }

        Api.cadastrar(data)
    })
}
creatAccount()