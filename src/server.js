// const express = require('express')
import express from 'express' //froma mais atual de fazer importação, mesmo resultado do require
import {PORT, HOST} from './config.js' //importando a porta do config
import nomeAleatorio from './config.js'

const app = express()


app.get('/', (req, res) => {
  res.send(nomeAleatorio.ola)
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})
