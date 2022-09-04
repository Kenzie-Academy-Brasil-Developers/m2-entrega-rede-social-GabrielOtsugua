export class Api {

    static async cadastrar(data) {

        const user = await fetch("https://m2-rede-social.herokuapp.com/api/users/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
                work_at: data.work_at,
                image: data.image
            })
        })
            .then(res => res.json())

        return user
    }

    static async logar(data) {

        const user = await fetch("https://m2-rede-social.herokuapp.com/api/users/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
            .then(res => res.json())

        return user
    }
}

// LOGIN FOI ATE ONDE CONSEGUI FAZER, DEPOIS DAI ESTAVA DANDO ERRO NA URL, TESTAVA NO INSOMNIA E CONTINUAVA DANDO ERRO.
// PARA FAZER O USUARIO IR PARA CONTA DELE, PRECISO DO GET, MAS NÃO ESTA FUNCIONANDO, PELO MENOS NÃO COMIGO.
// ?page={numPage} TAMBEM NÃO FUNCIONA