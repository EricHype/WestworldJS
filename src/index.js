import { Miner } from "./Agents/Miner.js"
import { StartingState } from "./States/TestState1.js"

const miner = new Miner(
  1, 5, 5,
  5, 5, new StartingState()
);
for(let i = 0; i < 10; i++) {
  miner.update();
}