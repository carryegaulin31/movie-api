const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const titleMatch = (request, response) => {
  const { title } = request.params

  const theTitle = movies.filter((movie) => movie.title === title)

  return response.send(theTitle)
}

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

  return response.send(newMovie)
}

module.exports = { getAllMovies, titleMatch, saveNewMovie }
