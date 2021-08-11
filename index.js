/* eslint-disable no-console */
const express = require('express')
const { getAllMovies, getByTitle, getByDirector } = require('./controllers/index')

const app = express()

app.listen(1334, () => {
  console.log('yay server up on 1334')
})

app.get('/movies', getAllMovies)

app.get('/movies/:title', getByTitle)

app.get('/movies/:directors', getByDirector)

