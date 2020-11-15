const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getTitle, directorMatch, saveNewMovie } = require('./controllers/movies')
const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:title', getTitle)

app.get('/movies/:director', directorMatch)


app.post('/', bodyParser.json(), saveNewMovie)
// or is it '/movies' either way it is not working

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337..')
})
