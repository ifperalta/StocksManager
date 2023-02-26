const newsfs = require("fs");
let parsenewsdata: any = "";

newsfs.readFile(`./src/datasource/json/newsdata.json`, (err: any, data: any) => {
    if (err) {
        console.log(err);
    } else {
        parsenewsdata = JSON.parse(data);
    }
});

const getNews = async (req: any, res: any) => {
    res.send(parsenewsdata);
}

const getNewsData = async (req: any, res: any) => {
    let stock = req.params.ticker;
    res.send(parsenewsdata[stock]);
}

module.exports = {
    getNews: getNews,
    getNewsData: getNewsData
}