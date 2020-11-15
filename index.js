const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, titleMatch, saveNewMovie } = require('./controllers/movies')
const app = express()

app.get('/movies', getAllMovies, titleMatch)

app.get('./movies/title:', titleMatch)


app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.post('/', bodyParser.json(), saveNewMovie)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337..')
})
