// var i;
// // const got = require("got");
// // const cheerio = require("cheerio");
// //
// // function getCities() {
// //     for (i = 1; i < 2; i++) {
// //         (async () => {
// //             try {
// //                 var url = "https://www.wg-gesucht.de/wg-zimmer-in-Aachen." + i + ".0.1.0.html";
// //                 const response = await got(url);
// //                 const $ = cheerio.load(response.body);
// //                 console.log(response.body)
// //                 const cityName = $(".col-md-8").textContent;
// //                 console.log(cityName);
// //             } catch (e) {
// //                 console.log(e.response.body);
// //             }
// //         })
// //         ();
// //     }
// // }
// //
// // getCities();

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const CITY_SELECTOR = "#top_column_wrapper > div > div:nth-child(8) > div.col-md-8 > h1";

    var i = 1;
    for (i; i < 4; i++) {
        try {
            const page = await browser.newPage();
            await page.setRequestInterception(true);
            let pageUrl = "https://www.wg-gesucht.de/wg-zimmer-in-Bielefeld." + i + ".0.1.0.html";
            await page.goto(pageUrl);
            await page.waitFor(1000);
        } catch (e) {
            console.log(e);
        }
    }
    await browser.close()

})();
