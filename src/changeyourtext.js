const puppeteer = require('puppeteer'); // importamos Puppeteer

const spText = `Por este motivo he decido crear este listado con algunos de los mejores blogs sobre plantas y jardinería. Yo los tengo en mi “Lista de lectura” y trato de no perderme ninguna publicación. Al igual que a mi, creo estos blogs de temática jardinera os van a gustar:

RioMoros es uno de los primeros blogs que empecé a seguir cuando me inicié como blogger de jardines, hace ya la friolera de diez años. Así que este es uno de los blogs más veteranos y en él podremos encontrar toda la información necesaria sobre planta ornamental.
Guía de jardín es un completo blog todo terreno que nos habla sobre plantas, jardines del mundo, diseño de espacios verdes, así como, consejos de jardinería y huerto. Información muy útil para todos los que estamos interesados en este mundo verde.
En Un jardín sostenible descubriremos que jardinería y poesía siempre han ido de la mano. Es un blog que nos habla de jardín y plantas desde un punto de vista particular y apasionado, un lugar donde iremos conociendo el día a día en un espacio verde.
Plantukis es otro blog todo terreno y vistándolo descubriremos fichas de plantas, biografías de paisajistas y botánicos singulares, bibliografía de interés y, además, como rasgo diferenciador, nos informan de todos los eventos que tendrán lugar relacionados con plantas y jardinería.
Metido en jardines es un blog que nos habla de todo lo relacionado con lo verde. Esto es plantas, jardín, horticultura, mundo rural y, en especial, nos explican lo que necesitamos saber sobre diseño de jardines.
Arañazos en el cielo es un blog especializado en paisajismo y, concretamente, del estilo conocido como new perennial wave (nueva ola de perennes). Además, explican con detalle las características botánicas de las especies vegetales que intervienen en este tipo de diseño de jardines. Es un blog de lectura muy amena.`;  // Web a scrapear

const origin = 'es';
const stepOne = 'ro';
const stepTwo = 'it';
const stepThree = 'fr';

console.log('Changing your text. Wait a few seconds, please');

(async () => {
    let urlIni = `https://translate.google.com/?sl=${origin}&tl=${stepOne}&text=`
    const urlEsFr = `${urlIni}${spText}&op=translate`
    const browser = await puppeteer.launch({ headless: true} ) // Abre el navegador
    const page = await browser.newPage() //Abre una pestaña en el navegador
    await page.goto(urlEsFr) // Vamos a la página que queremos scrapear

    await page.waitForTimeout(5000)
    
    const textStepOne = await page.evaluate(() => {
        const someText = `clearBorrar textoCancelarEnviarTu contribución servirá para mejorar la calidad de las traducciones. Es posible que se muestre a otros usuarios de forma anónima. Más información`

        const translatedText = document.querySelector('.zkZ4Kc.dHeVVb').innerText
        return translatedText.slice(0,someText.length * -1)
    })

    await page.waitForTimeout(1000)
    router.get
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


    console.log(changedText)   
})();