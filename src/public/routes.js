const {Router, response} = require('express')
const router = Router()
const puppeteer = require('puppeteer'); // importamos Puppeteer

const  getUserText = require('./getUserText')

console.log(getUserText)
const changeText = require('./changeYourText')

router.get("/", (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

router.post('/', async(request, response) => {
    const submitedByUser = request.body
    
    const userText = getUserText(submitedByUser)
    const kko = await changeText(userText.text)

    console.log(kko)
    response.send(userText.text)
})
module.exports = router