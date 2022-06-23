import { State } from "./State.js";
import { Location } from "../Location.enum.js";
import { TestState1 } from "./TestState1.js";

const drinkSatiate = 10;
const drinkCost = 5;

export class EnterSaloon extends State {
  enter(object) {
    console.log("Entering saloon");
    object.changeLocation(Location.Saloon);
  }

  exit(object) {
    console.log("Exiting saloon. Returning to shack");
  }

  execute(object) {
    console.log("Getting drink");

    // pay
    let gold = object.getGold();
    if (gold >= drinkCost) {
      object.setGold(gold - drinkCost);
    } else {
      console.log("Not enough gold. Gold level is " + gold);

      object.changeState(new TestState1());
    }

    console.log("Received drink.");
    let thirstLevel = object.getThirst() - drinkSatiate;
    if (thirstLevel < 0) {
      thirstLevel = 0;
    }
    object.setThirst(thirstLevel);
  }
}
