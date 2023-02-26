const connectuser = require("../dbconnect/dbconnect");
const md5 = require('md5');

//insert
const _createUser = (req: any, res: any) => {
    let now = new Date();
    let newUser = [
        [ generateUserID(8), req.body.fname,  req.body.lname, md5(req.body.password), '', req.body.email, '', now.toISOString(), '', 1, 0]
    ];
    connectuser.query("INSERT INTO stk_pm_users (stk_user_id, stk_user_fname, stk_user_lname, stk_user_pass, stk_user_username, stk_user_email, stk_user_phone, stk_user_registered, stk_user_activation_key, stk_user_status, islogged) VALUES ?; ", [newUser], (error: any, result: any, fields: any ) => {
        if(error) throw error;
        else res.send("success");
    });
}

//authenticate user
//create a islogged token
const _userlogin = (req: any, res: any) => {
    let dbquery = `SELECT * FROM stk_pm_users WHERE stk_user_email  = '${req.body.email}' AND stk_user_pass = '${md5(req.body.password)}'`;
    let token = "";
    connectuser.query(dbquery, function (error: any, results: any, fields: any) {
        if(results.length > 0){ 
            token = generateUserID(25);
            connectuser.query("UPDATE stk_pm_users SET islogged = ? WHERE stk_user_id = ?", [token, results[0].stk_user_id], (error: any, result: any, fields: any ) => {
                if(error) throw error;
            });
        }else{
            token = "";
        }
        res.send(token);
    });
}

const _userauth = (req: any, res: any) => {
    let dbquery = `SELECT * FROM stk_pm_users WHERE islogged = '${req.params.token}'`;
    connectuser.query(dbquery, function (error: any, results: any, fields: any) {
        if(results.length > 0) 
        res.send(true);
        else
        res.send(false);
    });
}

const _userdata = (req: any, res: any) => {
    let dbquery = `SELECT * FROM stk_pm_users WHERE islogged = '${req.params.token}'`;
    connectuser.query(dbquery, function (error: any, results: any, fields: any) {
        if(results.length > 0) 
        res.send(results);
        else
        res.send(false);
    });
}

//create a islogged token
const _signout = (req: any, res: any) => {
    connectuser.query("UPDATE stk_pm_users SET islogged = ? WHERE islogged = ?", ["", `${req.params.token}`], (error: any, result: any, fields: any ) => {
         if(error) throw error; 
         res.send("success");
    });
    // missing return statement
}

function generateUserID(length: number) {
    var result = '';
    var characters = 'abcdefghijskmnOPQRSTUVWXYZ1234567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//update
//delete user
//select user

module.exports = {
    createUser: _createUser,
    login: _userlogin,
    authenticate: _userauth,
    userdata: _userdata,
    signout: _signout
    //deleteUser: _deleteUser,
    //selectUser: _selectUser,
}