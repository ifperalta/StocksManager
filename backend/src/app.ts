const {app, cors, bodyparser, port, fs, express } = require('./config');
const {parse, stringify, toJSON, fromJSON} = require('flatted');

app.use(cors());
app.use(bodyparser.json());  
app.use(bodyparser.urlencoded({extended: true}));
app.use( (req: any, res: any, next: any) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

app.get("/", (req: any, res: any) => {
    res.send("Hey!");
});

// portfolio data 
require("./portfolio/portfolio_routes")(app);
require("./portfoliolist/portfoliolist_routes")(app);

// news data
require("./news/news_routes")(app);
//require("./news/insights")(app);


//scanner data
require("./scanner/scanner_routes")(app);


//user 
require("./user-services/user_routes")(app);


// iex cloud data 
/*app.get("/news/:ticker", iexcontroller.getNewsData);
app.get("/earnings/:ticker", iexcontroller.getEarnings);
app.get("/company/:ticker", iexcontroller.getCompanyInfo);
app.get("/price/:ticker", iexcontroller.getPriceData);
app.get("/stats/:ticker", iexcontroller.getStatsData);
app.get("/quote/:portfolioid", iexcontroller.getQuoteData);*/

app.listen(port, () => console.log('Listening to port ${port} ...'));