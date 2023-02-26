const user = require('./user_model');

module.exports = (app: any) => {
    //app.delete("/user/:userdataid", registration.deleteUser);
    app.post("/login/", user.login);
    app.post("/register/", user.createUser);
    app.get("/user-auth/:token", user.authenticate);
    app.get("/userdata/:token", user.userdata);
    app.put("/signout/:token", user.signout);
}