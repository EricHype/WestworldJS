import { BaseGameEntity } from "../BaseGameEntity.js";
import { Location } from "../Location.enum.js"

const costOfBeer = 1
const beerThirstReduction = 10
const startingGoldCarried = 10

export class Miner extends BaseGameEntity {
  constructor(id, comfortLevel, maxNuggets, thirstThreshold, tirednessThreshold, startingState) {
    super(id);
    this.id = id;
    this.comfortLevel = comfortLevel;
    this.maxNuggets = maxNuggets;
    this.thirstThreshold = thirstThreshold;
    this.tirednessThreshold = tirednessThreshold;

    this.currentState = startingState;
    this.location = Location.Shack;
    this.goldCarried = 10;
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
    console.log("my thirst level is " + this.thirst)
    return this.thirst;
  }

  setThirst(thirst) {
    this.thirst = thirst;
  }

  isOverThirstThreshold() {
    console.log("my thirst is " + this.thirst, "my thirst threshold is", this.thirstThreshold)
    return this.thirst > this.thirstThreshold
  }

  canAffordBeer() {
    if (this.goldCarried >= costOfBeer){
      return this.goldCarried >= costOfBeer
    }
    console.log("i can't afford any beer")
    
  }

  buyBeer() {
    this.goldCarried = this.goldCarried - costOfBeer
    let newThirst = this.thirst - beerThirstReduction
    if(newThirst >= 0) {
      this.thirst = newThirst
    }
    else {
      this.thirst = 0
    }
  }
}