const { loginGET, loginPOST, dashBoardGET } = require("./controllers.js");

function register(framework) {
    framework.post("/login", loginPOST);
    framework.get("/login", loginGET);
    framework.get("/dashboard", dashBoardGET);
}

module.exports = {
    register
};
