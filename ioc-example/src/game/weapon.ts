import { injectable } from "inversify";

@injectable()
export class Weapon {

    private readonly attack: number = 100;

    constructor() {
        console.log("Weapon Up!");
    }

    getAttack(): number {
        return this.attack;
    }

}
