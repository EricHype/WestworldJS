import { State } from "./State.js"
import { BarState } from "./BarState.js";

export class StartingState extends State {
  enter(object) {
    console.log("Entering test 1 state");
  }

  exit(object) {
    console.log("Exiting test 1 state");
  }

  execute(object) {
    console.log("Executing test 1 state");

    if(object.isOverThirstThreshold()) {
        object.changeState(new BarState());
    }
  }
}