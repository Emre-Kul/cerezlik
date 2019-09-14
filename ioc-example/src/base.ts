import "reflect-metadata";
import { Container } from "inversify";

import { Warrior } from "./game/warrior";
import { Weapon } from "./game/weapon";


const TYPES = {
    Weapon: Symbol.for("Weapon"),
    Warrior: Symbol.for("Warrior")
};

const container = new Container();

container.bind<Weapon>(TYPES.Weapon).to(Weapon);
container.bind<Warrior>(TYPES.Warrior).to(Warrior);

export { container, TYPES };
