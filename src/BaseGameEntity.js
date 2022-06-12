export class BaseGameEntity {

    constructor(id) {
        this.id = id;
    }

    /**
     * Implementation required
     */
    update() {
      throw new Error('You have to implement the method update!');
    }
}