const axios = require("axios");
const cheerio = require("cheerio");

const baseUrl = "https://www.ratemyprofessors.com/";

const listingQuery = ".listing.PROFESSOR";
const firstNameQuery = "";
const lastNameQuery = "";
const avgRatingQuery = "#mainContent > div.right-panel > div.rating-breakdown > div.left-breakdown > div > div.breakdown-header.quality-header > div > div > div";

module.exports = class rmpScraper {

    professorName = "";
    professorPageLink = "";

    constructor(professorName) {
        this.professorName = professorName;
    }

    async checkValidProf() {
        let valid = false;
        let response = await axios(baseUrl + `search.jsp?queryoption=HEADER&queryBy=teacherName&schoolName=university+of+ottawa&schoolID=&query=${encodeURIComponent(this.professorName)}`);
        const html = response.data;
        const $ = cheerio.load(html);
        let professor = $(listingQuery);
        if (professor) {
            professor = $(professor);
            this.professorPageLink = professor.find("a").attr("href");
            valid = true;
        } else {
            console.log("Professor Does Not Exist in RMP Database");
        }
        return valid;
    }

    async search() {
        if (this.professorName === "") {
            console.log("Professor Name Must Be Provided");
        } else {
            if (await this.checkValidProf()) {
                axios(baseUrl + this.professorPageLink)
                    .then(response => {
                        const html = response.data;
                        const $ = cheerio.load(html);
                        const rating = $(avgRatingQuery);
                        console.log(rating.text());

                    })
            }
        }
    }
}
// axios(baseUrl)
//     .then(response => {
//         const html = response.data;
//         const $ = cheerio.load(html);
//         const title = $("h1");
//         console.log(title.text());
//     })
//     .catch(console.error);
