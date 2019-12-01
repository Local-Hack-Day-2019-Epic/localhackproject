const axios = require("cheerio");
const cheerio = require("cheerio");

const baseUrl = "https://www.ratemyprofessors.com/";

axios(baseUrl)
    .then(response => {
        const html = response.data;
        console.log(html);
    })
    .catch(console.error);