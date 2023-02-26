const news = require("./news");
const save = require("./savenews");

// loads the news data from the json file
module.exports = (app: any) => {
    app.get("/news", news.getNews);
    app.get("/news/:ticker", news.getNewsData);
    app.get("/savenewsdata", save.saveNews); // calls the API and saves the data to the json file
}