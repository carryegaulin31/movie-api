const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getByTitleOrDirector = (request, response) => {
  const { input } = request.params

  const foundTitleAndDirector = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(input) ||
      movie.directors.toString().toLowerCase().includes(input)
  })

  return response.send(foundTitleAndDirector)
}

/* const directorMatch = (request, response) => {
  const { directorOnly } = request.params

  // eslint-disable-next-line max-len
  const theDirector = movies.filter((movie) => {
    return movie.directors.toString().toLowerCase().includes(directorOnly)
  })

  return response.send(theDirector)
} */

const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    // eslint-disable-next-line max-len
    return response.status(400).send('The following fields are required: location, mascot, abbreviation, conference, division')
  }
  const newMovie = {
    // eslint-disable-next-line max-len
    title: 'Cabin in the Woods', directors: '[Drew Goddard]', releaseDate: '04/13/2012', rating: 'R', runTime: '95 mins', genres: '[Horror]'
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getByTitleOrDirector, saveNewMovie }
