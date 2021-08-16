/* eslint-disable no-console */
const movies = require('../movies')

// controller for all moves //
const getAllMovies = (request, response) => {
  return response.send(movies)
}

// controler for getByTitle//
const getByTitle = (request, response) => {
  const { title } = request.params
  const specificTitle = movies.filter(movie => {
    console.log(movie.title)

    return movie.title.toLowerCase().includes(title.toLowerCase())
  })

  return response.send(specificTitle)
}

//controller for getByDirector//
const getByDirector = (request, response) => {
  const directorFound = movies.filter(movie => { return movie.directors.some(director => {
    return director.toLowerCase().includes(request.params.directors.toLowerCase())
  })
  })

  return response.send(directorFound)
}

// controller function to post a new movie//
const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('There are fields missing')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).redirect('/movies')
}

module.exports = { getAllMovies, getByTitle, getByDirector, saveNewMovie }
