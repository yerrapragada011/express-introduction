// app file

const express = require('express')
const userRouter = require('./routes/userRoutes')
const path = require('node:path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: false }))
const assetsPath = path.join(__dirname, 'public')
app.use(express.static(assetsPath))

app.use((req, res, next) => {
  // You can of course also create your own for your own use-case!
  // Just make sure to call `next`
  next()
})

// app.js

const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' }
]

const users = ['Rose', 'Cake', 'Biff']

app.get('/', (req, res) => {
  res.render('index', { links: links, users: users })
})

app.get('/about', (req, res) => {
  res.render('about', { links: links })
})

app.use('/users', userRouter)

const PORT = 3000
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))
