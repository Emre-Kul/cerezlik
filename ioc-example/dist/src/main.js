"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const warrior_1 = require("./game/warrior");
function run() {
    const warrior = base_1.container.resolve(warrior_1.Warrior);
    // console.log(warrior.weapon.getAttack())
    console.log("Run");
}
exports.run = run;
//# sourceMappingURL=main.js.map