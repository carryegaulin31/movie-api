const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getByTitleOrDirector, saveNewMovie } = require('./controllers/movies')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:input', getByTitleOrDirector)

app.post('/', bodyParser.json(), saveNewMovie)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337..')
})
