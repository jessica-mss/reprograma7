const { response } = require('express')
const express = require("express")
const app = express()
const estados = require("./data/estados-cidades.json")

app.get("/estados/todos", (request, response) => {
    response.status(200).send(estados)
})

app.get("/estados/:sigla", (request, response) => {
    const siglaSolicitada = request.params.sigla
    console.log(siglaSolicitada)
    response.status(200).send(estados.find(siglaPedida => siglaPedida.sigla == siglaSolicitada))
})

app.listen(3030, () => {
    console.log("Meu primeiro servidor na porta 3030")
})

