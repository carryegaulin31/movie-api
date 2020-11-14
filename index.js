const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies')
const app = express()

app.get('/', (request, response) => {
  return response.render('index', { movies })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.post('/', bodyParser.json(), saveNewHero) // obviously NOT saveNewHero

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337..')
})