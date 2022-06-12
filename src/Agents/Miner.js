import { BaseGameEntity } from "../BaseGameEntity.js";
import { Location } from "../Location.enum.js"

export class Miner extends BaseGameEntity {
  constructor(id, comfortLevel, maxNuggets, thirstLevel, tirednessThreshold, startingState) {
    super(id);
    this.id = id;
    this.comfortLevel = comfortLevel;
    this.maxNuggets = maxNuggets;
    this.thirstLevel = thirstLevel;
    this.tirednessThreshold = tirednessThreshold;

    this.currentState = startingState;
    this.location = Location.Shack;
    this.goldCarried = 0;
    this.moneyInBank = 0;

    // the higher the value, the thirstier the miner
    this.thirst = 0;

    //the higher the value, the more tired the miner
    this.fatigue = 0;
  }

  update() {
    this.thirst += 1;
    if(this.currentState != null) {
        this.currentState.execute(this);
    }
  }

  changeState(newState) {
    this.currentState.exit(this);
    this.currentState = newState;
    this.currentState.enter(this);
  }

  getThirst() {
    return this.thirst;
  }

  setThirst(thirst) {
    this.thirst = thirst;
  }
}