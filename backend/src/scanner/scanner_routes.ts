const scanner = require('./scanner_model')

// scanner routes
module.exports = (app: any) => {    
    app.get("/scanner", scanner.getPrices);
    app.get("/scanner/:ticker", scanner.getQuotePrices);
    app.get("/update-prices-scanner", scanner.stockPrice); // run this every 20 minutes
}