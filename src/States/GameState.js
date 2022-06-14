import { State } from "./State.js"
import { TestState2 } from "./TestState2.js";
import { Location } from "../Location.enum.js"

export class GameState extends State {
  enter(object) {
    console.log("Entering test 1 state");
  }

  exit(object) {
    console.log("Exiting test 1 state");
  }

  execute(object) {
	console.log("executing")
	if(object.currentState === Location.goldmine) {
		if(object.getCurrentCarriedGold() < object.getMaxNuggets()) {
			object.mineGold()
			object.setFatigue(1);
			object.setThirst(1)
		}
	}
	
    if(object.getThirst() > 5) {
        object.changeState(new TestState2());
    }
  }
}