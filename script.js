const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")// outras moedas

    const dolarToday = 4.9
    const euroToday = 5.3
    const libraToday = 6.5
    const bitcoinToday = 309.85
    const pesoToday = 779.6

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response => Response.json()) //API em tempo real.
    // const dolarToday = data.USDBRL.high
    // const euroToday = data.USDBRL.high

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dolar 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



















