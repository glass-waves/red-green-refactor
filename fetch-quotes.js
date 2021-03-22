const fetch = require('node-fetch')

const fetchQuote = async () => {
    const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes')
    const body = await res.json();
    const firstResult = body[0];  
    return {name: firstResult.character, text: firstResult.quote, image: firstResult.image};
}

module.exports = fetchQuote;