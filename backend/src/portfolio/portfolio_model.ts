/**** 
 * Get all portfolio data 
 * 
**/

const connect = require("../dbconnect/dbconnect");

const _getAll = (req: any, res: any) => {
    if(req.params.token != ""){
        let query = `SELECT * FROM stk_pm_users WHERE islogged = "${req.params.token}"`;
        connect.query(query, function (error: any, results: any, fields: any) {
            if(error){ 
                throw error;
            }else{
                if(results.length > 0){
                    let query = `SELECT * FROM stk_pm_portfolio WHERE stk_user_id = '${results[0].stk_user_id}' ORDER BY stk_ID DESC`;
                    connect.query(query, function (error: any, results: any, fields: any) {
                        if (error) throw error;
                        else res.send(results);
                    });
                }
            }
        });
    }
    else{
        res.send(false);
    }       
}

//insert 
const _insertRow = (req: any, res: any) => {
    let query = `SELECT * FROM stk_pm_users WHERE islogged = "${req.params.token}"`;
    connect.query(query, function (error: any, results: any, fields: any) {
        if(error){ 
            throw error;
        }else{
            let now = new Date();
            let newPortfolio = [
                [generateUniqueID(), results[0].stk_user_id, req.body.stk_portfolio_name, req.body.stk_portfolio_description, now.toISOString(), 1,]
            ];
            connect.query("INSERT INTO stk_pm_portfolio (stk_uid, stk_user_id, stk_portfolio_name, stk_portfolio_description, stk_portfolio_date, stk_portfolio_status) VALUES ?; ", [newPortfolio], (error: any, result: any, fields: any ) => {
                if(error) throw error;
                else res.send(true);
            });
        }
    });
}

// Update portfolio
const _updateRow = (req: any, res: any) => {
    connect.query("UPDATE stk_pm_portfolio SET stk_portfolio_name = ?, stk_portfolio_description = ? WHERE stk_ID = ?", [req.body.stk_portfolio_name, req.body.stk_portfolio_description, req.body.stk_ID], (error: any, result: any, fields: any ) => {
        if(error) throw error;
        else res.send(`inserted new row ${result.stk_ID}`);
    });
}

const _deleteRow = (req: any, res: any) => {
    let dbquery = `DELETE FROM stk_pm_portfolio WHERE stk_ID = ${req.params.stk_ID}`
    connect.query(dbquery, (error: any, result: any, fields: any ) => {
        if(error) throw error;
        else res.send(`deleted row ${result.stk_ID}`);
    });
}

function generateUniqueID() {
    var length = 7;
    var result = '';
    var characters = 'ABCDEFGHIJKLMON0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const _selectRow = (req: any, res: any) => {
    let dbquery = `SELECT * FROM stk_pm_portfolio  WHERE stk_ID = ${req.params.portfolio_id}'`
    connect.query(dbquery, function (error: any, results: any, fields: any) {
        if (error) throw error;
        else res.send(results);
    });
}

module.exports = {
    getAll: _getAll,
    insertRow: _insertRow,
    deletRow: _deleteRow,
    updateRow: _updateRow,
    selectRow: _selectRow
}