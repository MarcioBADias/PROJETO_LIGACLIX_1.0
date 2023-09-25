const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const hbs = exphbs.create({
    partialsDir: ['views/partinals']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
    const title = 'LigaCix'
    res.render('home', { title })
})

app.listen(3000, () => {
    console.log('Liga no ar!')
})
