const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// app.get('/details', (req, res) =>{
//     const clixUnit = {
//         edition: 'AV60',
//         serie: '37a',
//         name: 'Hulk',
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkdhYnzQuhzfDMAlxWP2VMEnYrAvEfLppSCiXPJ4vQTCEAv8f00HPCAvpQp5mw1tSsvw&usqp=CAU",
//         price: 50
//     }

//     res.render('details', {clixUnit})
// })

app.get('/', (req, res) => {
    const clixUnits = [{
        edition: 'AV60',
        serie: '37a',
        name: 'Hulk',
        img: "https://res.cloudinary.com/csicdn/image/upload/c_pad,fl_lossy,h_350,q_auto,w_350/v1/Images/Products/Misc%20Art/Heroclix/full/hc_ma60_037a.jpg ",
        price: 50
    },
    {
        edition: 'AV60',
        serie: '37b',
        name: 'Hulk Prime',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrz_1j-XORTD0F1-4alOhpjAoizA5xTe5kD6jb0dxFm3gsDZvo4gyHQhRfxjBmur8GGA&usqp=CAU",
        price: 600
    },
    {
        edition: 'AV60',
        serie: '105',
        name: 'Cap. America',
        img: "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/1280x1280/products/66487/169231/029b__96891.1674258205.png?c=2",
        price: 100
    }
]
    res.render('home', { clixUnits })
})

app.listen(3000, () => {
    console.log('Liga no ar!')
})
