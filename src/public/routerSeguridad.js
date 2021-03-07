const {Router, response} = require('express')
const router = Router()
const puppeteer = require('puppeteer'); // importamos Puppeteer

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

const getUserText = (objectSumited) =>{
    const userText = {
        "text": objectSumited.text 
    }
    return userText
}

async function changeText(spText) {
    const origin = 'es';
    const stepOne = 'ro';
    const stepTwo = 'it';
    const stepThree = 'fr';

    console.log(spText)

    let urlIni = `https://translate.google.com/?sl=${origin}&tl=${stepOne}&text=`
    const urlEsFr = `${urlIni}${spText}&op=translate`
    const browser = await puppeteer.launch() // Abre el navegador
    
    const page = await browser.newPage()

    await page.goto(urlEsFr)

    await page.waitForTimeout(5000)
    
    const textStepOne = await page.evaluate(() => {
        const someText = `clearBorrar textoCancelarEnviarTu contribución servirá para mejorar la calidad de las traducciones. Es posible que se muestre a otros usuarios de forma anónima. Más información`

        const translatedText = document.querySelector('.zkZ4Kc.dHeVVb').innerText
        return translatedText.slice(0,someText.length * -1)
    })

    await page.waitForTimeout(1000)
    
    urlIni = `https://translate.google.com/?sl=${stepOne}&tl=${stepTwo}&text=`
 
    const urlFrIt = `${urlIni}${textStepOne}`

    await page.goto(urlFrIt) // Vamos a la página que queremos scrapear
    await page.waitForTimeout(3000)

    const textStepTwo = await page.evaluate(() => {
        const someText = `clearBorrar textoCancelarEnviarTu contribución servirá para mejorar la calidad de las traducciones. Es posible que se muestre a otros usuarios de forma anónima. Más información`

        const translatedText = document.querySelector('.zkZ4Kc.dHeVVb').innerText
        return translatedText.slice(0,someText.length * -1)
    })

    await page.waitForTimeout(1000)

    urlIni = `https://translate.google.com/?sl=${stepTwo}&tl=${stepThree}&text=`

    const urlItPt = `${urlIni}${textStepTwo}`

    await page.goto(urlItPt) // Vamos a la página que queremos scrapear
    await page.waitForTimeout(3000)

    const textStepThree = await page.evaluate(() => {
        const someText = `clearBorrar textoCancelarEnviarTu contribución servirá para mejorar la calidad de las traducciones. Es posible que se muestre a otros usuarios de forma anónima. Más información`

        const translatedText = document.querySelector('.zkZ4Kc.dHeVVb').innerText
        return translatedText.slice(0,someText.length * -1)
    })

    await page.waitForTimeout(1000)

    urlIni = `https://translate.google.com/?sl=${stepThree}&tl=${origin}&text=`

    const urlPtEs = `${urlIni}${textStepThree}`

    await page.goto(urlPtEs) // Vamos a la página que queremos scrapear
    await page.waitForTimeout(3000)

    const changedText = await page.evaluate(() => {
        const someText = `clearBorrar textoCancelarEnviarTu contribución servirá para mejorar la calidad de las traducciones. Es posible que se muestre a otros usuarios de forma anónima. Más información`

        const translatedText = document.querySelector('.zkZ4Kc.dHeVVb').innerText
        return translatedText.slice(0,someText.length * -1)
    })

    await page.waitForTimeout(1000)
    await browser.close()

    return await changedText
};


module.exports = router