/* eslint-disable no-console */
const express = require('express')
const { getAllMovies, getByTitle, getByDirector, saveNewMovie } = require('./controllers/index')
const bodyParser = require('body-parser')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:title', getByTitle)

app.get('/movies/directors/:directors', getByDirector)

app.post('/', bodyParser.json(), saveNewMovie)

app.listen(1334, () => {
  console.log('yay server up on 1334')
})
