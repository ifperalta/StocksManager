
const newsList = require("fs");
const { iexNewsclient } = require("../config");

let newsObj: any = {};
let NewsObj: any = "";
let newObj: any = {};
let newsJsonData = "";

// update stock news
const canStocksNews = (req: any, res: any) => {
    newsList.readFile(`./src/datasource/canstocks.json`, async (err: any, tickers: any) => {
        if (err) {
            console.log(err);
        } else {
            let object = JSON.parse(tickers);
            for (let i = 0; i < object.length; i++) {
                let NewsObj = await iexNewsclient.news({symbol: object[i].Symbol}).then((result: any) => {            
                                        console.log(result);
                                        return result;
                                    }).catch((error: any) => {
                                        console.log(error);
                                    });
                newsObj[object[i].Symbol] = NewsObj;        
            }
            writeNewsData(newsObj);
            res.send("Updating news data...");
        }
    });
}

// Update price json
function writeNewsData(newObj: any){
    newsList.writeFile(`./src/datasource/json/newsdata.json`, JSON.stringify(newObj), (err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log("News data saved successfully");
        }
    });
}

// load stock news
newsList.readFile(`./src/datasource/json/newsdata.json`, (err: any, news: any) => {
    if (err) {
        console.log(err);
    } else {
        newsJsonData = JSON.parse(news);
    }
});

const loadNews = async (req: any, res: any) => {
    res.send(newsJsonData);
}

module.exports = {
    getNews: loadNews,
    saveNews: canStocksNews
}