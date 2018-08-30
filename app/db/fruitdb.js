export class FruitDB {
  constructor () {
    // Create an array of fruit objects.
    this.data = [
      { id: 1, name: 'apple', color: 'red', count: 10 },
      { id: 2, name: 'orange', color: 'orange', count: 4 },
      { id: 3, name: 'banana', color: 'yellow', count: 7 },
      { id: 4, name: 'lemon', color: 'yellow', count: 8 },
      { id: 5, name: 'lime', color: 'green', count: 2 },
      { id: 6, name: 'blueberry', color: 'blue', count: 100 },
      { id: 7, name: 'raspbery', color: 'red', count: 50 },
      { id: 8, name: 'strawberry', color: 'red', count: 25 }
    ];
  }

  // Return an array with all fruit objects
  fetchAll() {
    return this.data;
  }

  // Takes an id as input and returns the first matching fruit object.
  // (There should be only 1)
  fetchById(id) {
    // There should be only one match. Return first match or null if undefined.
    return this.data.filter(fruit => fruit.id === id)[0] || null;
  }

  // Takes a name as input and returns the first matching fruit object.
  // (There should be only 1)
  fetchByName(name) {
    // Name should be unique. Return first match or null if undefined.
    return this.data.filter(fruit => fruit.name === name)[0] || null;
  }

  // Takes a color as argument and returns an array of matching fruit objects.
  fetchByColor(color) {
    return this.data.filter(fruit => fruit.name === name);
  }
}
