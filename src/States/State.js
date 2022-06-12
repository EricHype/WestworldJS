

export class State {
  enter(object) {
    throw new Error('You have to implement the method enter');
  }
  exit(object) {
    throw new Error('You have to implement the method exit');
  }
  execute(object) {
    throw new Error('You have to implement the method execute');
  }
}