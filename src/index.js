import { Miner } from "./Agents/Miner.js"
import { TestState1 } from "./States/TestState1.js"
import { GameState } from "./States/GameState.js"

const miner = new Miner(
  1, 5, 5, 0,
  5, new GameState()
);
for(let i = 0; i < 10; i++) {
  miner.update();
}