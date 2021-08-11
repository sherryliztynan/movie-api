/* eslint-disable no-console */
const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getByTitle = (request, response) => {
  const { title } = request.params
  const specificTitle = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))

  return response.send(specificTitle)
}

const getByDirector = (request, response) => {
  const { directors } = request.params
  const specificDirector = movies.filter(movie => movie.directors.toLowerCase().includes(directors.toLowerCase()))

  return response.send(specificDirector)
}

module.exports = { getAllMovies, getByTitle, getByDirector }
