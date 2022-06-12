import { State } from "./State.js"
import { TestState2 } from "./TestState2.js";

export class TestState1 extends State {
  enter(object) {
    console.log("Entering test 1 state");
  }

  exit(object) {
    console.log("Exiting test 1 state");
  }

  execute(object) {
    console.log("Executing test 1 state");

    if(object.getThirst() > 5) {
        object.changeState(new TestState2());
    }
  }
}