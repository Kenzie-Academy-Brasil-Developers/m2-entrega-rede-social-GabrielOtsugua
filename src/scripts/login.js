import { Api } from "./models/api.js"

function login() {

    const email = document.querySelector(".email")
    const password = document.querySelector(".password")
    const button = document.querySelector(".primaryButton-1")

    button.addEventListener("click", () => {

        const data = {
            email: email.value,
            password: password.value
        }

        Api.logar(data)
    })
}
login()