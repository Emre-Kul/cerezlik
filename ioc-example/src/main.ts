import { container } from "./base";
import { TYPES } from "./types";
import { Warrior } from "./game/warrior";


export function run() {
    const warrior: Warrior = container.get(TYPES.Warrior) as Warrior;
    // console.log(warrior.weapon.getAttack())
    console.log("Run");
}
