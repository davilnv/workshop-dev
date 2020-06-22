// Usei o express para criar e configurar meu servidor
const express = require('express')
const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi at perferendis quo eum odit et distinctio sint, vitae autem deleniti quos dicta labore odio error, optio aperiam, neque repellat nobis!",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi at perferendis quo eum odit et distinctio sint, vitae autem deleniti quos dicta labore odio error, optio aperiam, neque repellat nobis!",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi at perferendis quo eum odit et distinctio sint, vitae autem deleniti quos dicta labore odio error, optio aperiam, neque repellat nobis!",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaoke",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi at perferendis quo eum odit et distinctio sint, vitae autem deleniti quos dicta labore odio error, optio aperiam, neque repellat nobis!",
        url: "http://rocketseat.com.br"
    }
]
const reversedIdeas = ideas.reverse()

// Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// Configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

// Criei uma rota /
// e capturei o pedido do cliente para responder
server.get("/", function(req, res) {

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }


    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res) {
    return res.render("ideias.html", { ideas: reversedIdeas })
})


//Liguei meu servidor na porta 3000
server.listen(3000);