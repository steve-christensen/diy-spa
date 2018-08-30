import { FruitDB } from '../db/fruitdb.js';

export class List {
  constructor () {
    this.db = new FruitDB();
    this.parent = document.querySelector('main');
  }

  // Accepts a an error callback, but for this example
  // we won't handle errors in the list view
  renderView() {
    this.parent.innerHTML = '';
    this.parent.className = 'list';

    let section = document.createElement('section');

    section.insertAdjacentHTML('afterbegin','<h2>Fruit List</h2>');
    this.parent.insertAdjacentElement('beforeend', section);

    let ul = document.createElement('ul');
    section.insertAdjacentElement('beforeend', ul);

    let fruits = this.db.fetchAll();
    fruits.forEach(fruit => {
      let li = document.createElement('li');
      li.insertAdjacentHTML('beforeend', `<h3><a href="/fruit/${fruit.name.toLowerCase()}">${fruit.name}</a></h3>`);
      li.insertAdjacentHTML('beforeend', `<p>Color: ${fruit.color}</p>`);
      li.insertAdjacentHTML('beforeend', `<p>Count: ${fruit.count}</p>`);
      ul.insertAdjacentElement('beforeend', li);
    });
  }
}
