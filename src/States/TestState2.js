import { State } from "./State.js"

export class TestState2 extends State {

  enter(object) {
    console.log("Entering test 2 state");
  }

  exit(object) {
    console.log("Exiting test 2 state");
  }

  execute(object) {
    console.log("Executing test 2 state");
  }
}