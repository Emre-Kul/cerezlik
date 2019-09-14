"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const warrior_1 = require("./game/warrior");
const weapon_1 = require("./game/weapon");
const TYPES = {
    Weapon: Symbol.for("Weapon"),
    Warrior: Symbol.for("Warrior")
};
exports.TYPES = TYPES;
const container = new inversify_1.Container();
exports.container = container;
container.bind(TYPES.Weapon).to(weapon_1.Weapon);
container.bind(TYPES.Warrior).to(warrior_1.Warrior);
//# sourceMappingURL=base.js.map