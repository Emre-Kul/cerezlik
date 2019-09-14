import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Weapon } from "./weapon";

@injectable()
export class Warrior {

    weapon: Weapon;

    constructor(@inject(TYPES.Weapon) weapon: Weapon) {
        this.weapon = weapon;
        console.log(TYPES);
        console.log("Warrior Up!");
    }

}
