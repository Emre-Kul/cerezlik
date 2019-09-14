import {container, TYPES} from "./base";
import { Warrior } from "./game/warrior";


export function run() {
    const warrior: Warrior = container.resolve(Warrior) as Warrior;
    // console.log(warrior.weapon.getAttack())
    console.log("Run");
}
