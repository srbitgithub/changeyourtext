const {Router} = require('express')
const router = Router()



router.get('/', (req, res) => {
    res.json({mensaje: 'Hola mundo get'})
})

// router.post('/change', (req, res) => {
//     res.json({mensaje: 'Hola mundo'})
// })

router.post('/', (req, res) => {
    console.log(req.body)
    res.json({mensaje: 'Hola mundo post'})
})

module.exports = router