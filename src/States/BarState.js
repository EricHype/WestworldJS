import { State } from "./State.js"
import { TestState2 } from "./TestState2.js";

export class BarState extends State {
  enter(object) {
    console.log("Entering bar state");
  }

  exit(object) {
    console.log("Exiting bar state");
  }

  execute(object) {
    console.log("Executing bar state");

    if(object.isOverThirstThreshold() > 0 && object.canAffordBeer()) {
        object.buyBeer()
        console.log("I bought a beer, thirst level is now at " + object.getThirst())
    }
    else {
        object.changeState(new TestState2())
    }
  }
}