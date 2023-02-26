/**** 
 * Get all portfolio data 
 * 
**/

const connectlist = require("../dbconnect/dbconnect");

//insert 
const _insertRowList = (req: any, res: any) => {
    let list = [
        [req.body.stk_uid, 
         req.body.stk_lists_ticker,
         0,
         "", 
         1]
    ];

    connectlist.query("INSERT INTO stk_pm_lists (stk_uid, stk_lists_ticker, stk_lists_sector_id, stk_lists_sector, stk_lists_status) VALUES ?; ", [list], (error: any, result: any, fields: any ) => {
        if(error) throw error;
        else res.send(true);
    });
}

const _getAllList = (req: any, res: any) => {
    let dbquery = `SELECT * FROM stk_pm_lists WHERE stk_uid = '${req.params.stk_uid}' ORDER BY stk_lists_ticker ASC`;
    connectlist.query( dbquery, function (error: any, results: any, fields: any) {
        if (error){
            throw error;
        }else {
            res.send(results);
        } 
    });
}

const _deleteRowList = (req: any, res: any) => {
    let dbquery = `DELETE FROM stk_pm_lists WHERE stk_lists_id = ${req.params.stk_lists_id}`;
    connectlist.query(dbquery, (error: any, result: any, fields: any ) => {
        if(error) throw error;
        else res.send(true);
    });
}

/*
const _selectRowList = (req: any, res: any) => {
    let dbquery = `SELECT * FROM stk_pm_lists WHERE portfoliolist_id = ${req.params.portfolio_id}`;
    connectlist.query(dbquery, function (error: any, results: any, fields: any) {
        if (error) throw error;
        else res.send(results);
    });
}

const _updateRowList = (req: any, res: any) => {
    connectlist.query("UPDATE stk_pm_lists SET portfoliolist_name = ? WHERE portfoliolist_id = ?", [req.body.portfolioname, req.body.portfolio_id], (error: any, result: any, fields: any ) => {
        if(error) throw error;
        else res.send(`inserted new row ${result.portolio_id}`);
    });
}*/

module.exports = {
    getAll: _getAllList,
    insertRow: _insertRowList,
    deletRow: _deleteRowList
    //updateRow: _updateRowList,
    //selectRow: _selectRowList,
}
