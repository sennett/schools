require('dotenv').load()
const express = require('express')
const runAnalysis = require('./runAnalysis')
const path = require('path')
var exphbs = require('express-handlebars')

const app = express()
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
const port = 3000

app.get('/', (req, res) => {
  res.render('home', {
    googleMapsApiKey: process.env.GOOGLE_API_KEY
  })
})

app.get('/data', (req, res) => {
  var NUM_SCHOOLS = 3
  var DISTANCE = 500
  runAnalysis(DISTANCE, NUM_SCHOOLS, (results) => {
    res.json(results)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
