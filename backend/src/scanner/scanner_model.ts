/**** 
 * Scanner Model
 * https://github.com/iexcloud/iexjs
 * https://github.com/iexcloud/iexjs/blob/main/CATALOG.md
**/

const stockLists = require("fs");
const { iexPriceclient } = require("../config");

let priceObj: any = {};
let sortable: any = [];
let priceJsonData: any = [];

// update stock prices
const canStocks = (req: any, res: any) => {
    stockLists.readFile(`./src/datasource/canstocks.json`, async (err: any, tickers: any) => {
        if (err) {
            console.log(err);
        } else {
            let object = JSON.parse(tickers);
            for (let i = 0; i < object.length; i++) {
                let newStockObj = await iexPriceclient.quote({symbol: object[i].Symbol}).then((result: any) => {            
                                        console.log(result);
                                        return result;
                                    }).catch((error: any) => {
                                        console.log(error);
                                    });
               priceObj[object[i].Symbol] = newStockObj; 
            }
            writePriceData(priceObj);
            res.send("Updating price data...");
        }
    });
}

// write to json all the prices
function writePriceData(newPriceObj: any){
    stockLists.writeFile(`./src/datasource/json/stockprice.json`, JSON.stringify(newPriceObj), (err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log("News data saved successfully");
        }
    });
}

// load and sort decending the stocks data by percentage change 
stockLists.readFile(`./src/datasource/json/stockprice.json`, (err: any, prices: any) => {
    if (err) {
        console.log(err);
    } else {
        priceJsonData = JSON.parse(prices); // parse the data from the json file
        priceJsonData = Object.entries(priceJsonData); // convert it to json array
        priceJsonData.sort((a: any, b: any) => {
            return b[1].change - a[1].change; // sort the array by percentage change
        });
        return priceJsonData;
    }
});
/****************************************************************/

const getPrices = async (req: any, res: any) => {
    res.send(priceJsonData);
}

const getQuotePrices = async (req: any, res: any) => {
    let stock = req.params.ticker;
    res.send(priceJsonData[stock]);
}

module.exports = {
    stockPrice: canStocks,
    getQuotePrices: getQuotePrices,
    getPrices: getPrices
}