const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.json({mensaje: 'Hola mundo'})
})

router.post('/change', (req, res) => {
    res.json({mensaje: 'Hola mundo'})
})


module.exports = router