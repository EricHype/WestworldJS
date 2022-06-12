export class Location {
  // Create new instances of the same class as static attributes
  static Shack = new Location("shack")
  static Goldmine = new Location("goldmine")
  static Bank = new Location("bank")
  static Saloon = new Location("saloon")

  constructor(name) {
    this.name = name
  }
}