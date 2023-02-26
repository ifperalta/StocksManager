const portfolio = require('./portfolio_model')

// portfolio routes
module.exports = (app: any) => {    
    app.get("/portfolio/:token", portfolio.getAll);
    app.get("/get-portfolio/:portfolio_id", portfolio.selectRow);
    app.post("/build-portfolio/:token", portfolio.insertRow);
    app.put("/update-portfolio/", portfolio.updateRow);
    app.delete("/delete-portfolio/:stk_ID", portfolio.deletRow);
}