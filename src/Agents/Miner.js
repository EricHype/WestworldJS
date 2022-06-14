import { BaseGameEntity } from "../BaseGameEntity.js";
import { Location } from "../Location.enum.js"

export class Miner extends BaseGameEntity {
  constructor(id, discomfortLevel, maxNuggets, thirstLevel, tirednessThreshold, startingState) {
    super(id);
    this.id = id;
    this.discomfortLevel = discomfortLevel;
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

    this.changeState = this.changeState.bind(this)
  }

  changeState(newState) {
    this.currentState.exit(this);
    this.currentState = newState;
    this.currentState.enter(this);
  }

  update() {
    this.currentState.execute(this);
    this.thirst += 1;
    this.discomfortLevel += 1;
    this.fatigue += 1;

    /*
    //conditions after updating
    if(this.location != "saloon") {
        if(this.thirst === 1) {
          this.changeState(Location.saloon)
        }
    }

    if(this.location !== "shack") {
      if(this.fatique === 1) {
        this.changeState(Location.shack)
      }
    }
    */

  }

  mineGold(amount) {
    if(amount) {
      this.goldCarried += amount;
    } else {
      this.goldCarried != 1;
    }
  }

  getThirst() {
    return this.thirst;
  }

  getFatigue() {
    return this.fatigue;
  }

  getCurrentCarriedGold() {
    return this.goldCarried;
  }

  getMaxNuggets() {
    return this.maxNuggets;
  }

  setThirst(thirst) {
    this.thirst = thirst || 1;
  }

  setFatique(fatigue) {
    this.fatigue = fatigue || 1;
  }

}