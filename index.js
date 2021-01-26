const express = require('express')

const app = express()

const port = 8000

// app.get('/', mymethod)
// or
// just use a call back (like below)

app.get('/', (req, res) => {
  return res.send('You are visiting Home page route...')
})

app.get('/login', (req, res) => {
  return res.send('You are visiting login route...')
})

app.get('/signup', (req, res) => {
  return res.send('You are visiting signup route...')
})

app.get('/logout', (req, res) => {
  return res.send('You are logged out route...')
})

app.get('/signout', (req, res) => {
  return res.send('You are signed out')
})

app.get('/hitesh', (req, res) => {
  return res.send('Hitesh uses Instagram')
})

app.get('/prahlad', (req, res) => {
  return res.send('He is a Freelancer')
})
app.listen(port, () => {
  console.log('Server is up and running....')
})

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
