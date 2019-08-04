const fs = require("fs");
const DB = require("./db.json");
const { createJWT } = require("./jwt");

function logoutGET(req, res) {
    const expireDate=new Date();
    expireDate.setDate(expireDate.getDate() - 100);
    res.setCookie('auth_token', '', {
        Expires: expireDate.toUTCString()
    });
    res.redirect("/login");
}

function loginGET(req, res) {
    const body = fs.readFileSync(__dirname + "/view/login.html");
    res.header("Content-Type","text/html").send(body);
}

function loginPOST(req, res) {
    const userModel = DB.users.find((user) => user.username === req.body.username );
    if(!req.body.password || userModel.password !== req.body.password) {
        return res.redirect("/login?error=true");
    }
    const JWT = createJWT({ user: req.body.username });
    const expireDate=new Date();
    expireDate.setDate(expireDate.getDate() + 30);
    res.setCookie('auth_token', JWT, {
        Expires: expireDate.toUTCString()
    });
    res.redirect("/dashboard");
}

function dashBoardGET(req, res) {
    const body = fs.readFileSync(__dirname + "/view/dashboard.html");
    res.header("Content-Type","text/html").send(body);
}

module.exports = {
    loginGET,
    loginPOST,
    dashBoardGET,
    logoutGET
};
