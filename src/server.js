// const express = require('express')
import express from 'express' //froma mais atual de fazer importação, mesmo resultado do require
import {PORT, HOST} from './config.js' //importando a porta do config
import nomeAleatorio from './config.js'

const app = express()


app.post('/', (req, res) => {
  res.send(nomeAleatorio.ola)
})


app.get('/', (req, res) => {
  res.json({message: "ola esta mensagme esta em json"})
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})

