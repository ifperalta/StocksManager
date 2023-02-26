const portfoliolist = require('./portfoliolist_model')

// portfolio routes
module.exports = (app: any) => {
    app.get("/portfoliolist/:stk_uid", portfoliolist.getAll);
    app.post("/build-portfoliolist/", portfoliolist.insertRow);
    app.delete("/delete-portfoliolist-entry/:stk_lists_id", portfoliolist.deletRow);
    //app.get("/getlist/:portfolio_id", portfoliolist.getAll);
    //app.put("/update-portfoliolist/", portfoliolist.updateRow);
}