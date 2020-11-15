const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}
const getTitle = (request, response) => {
  const { title } = request.params

  const foundTitle = movies.filter((movie) => (movie.title.toLowerCase().includes(title)))

  return response.send(foundTitle)
}

const directorMatch = (request, response) => {
  const { directorOnly } = request.params

  const theDirector = movies.filter((movie) => (movie.directors.toString().toLowerCase()(directorOnly)))

  return response.send(theDirector)
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

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getTitle, directorMatch, saveNewMovie }
