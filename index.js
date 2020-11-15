const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getTitle, directorMatch, saveNewMovie } = require('./controllers/movies')
const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:title', getTitle)

app.get('/movies/:directorOnly', directorMatch)

app.post('/movies', bodyParser.json(), saveNewMovie)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})



app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337..')
})
