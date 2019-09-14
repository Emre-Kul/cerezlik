import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "./types";
import { Warrior } from "./game/warrior";
import { Weapon } from "./game/weapon";

const container = new Container();

container.bind<Weapon>(TYPES.Weapon).to(Weapon);
container.bind<Warrior>(TYPES.Warrior).to(Warrior);

export { container };
