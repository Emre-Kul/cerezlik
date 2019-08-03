const fs = require("fs");
const DB = require("./db.json");

function loginGET(req, res) {
    const body = fs.readFileSync(__dirname + "/view/login.html");
    res.header("Content-Type","text/html").send(body);
}

function loginPOST(req, res) {
    res.send(req.body);
}

function dashBoardGET(req, res) {
    res.send("DASHBOARD GET");
}

module.exports = {
    loginGET,
    loginPOST,
    dashBoardGET
};
