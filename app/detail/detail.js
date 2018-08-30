import { FruitDB } from '../db/fruitdb.js';

export class Detail {
  constructor () {
    this.db = new FruitDB();
    this.parent = document.querySelector('main');
  }

  // renderView accepts an error callback function for use
  // when the URL does not produce a valid name
  renderView() {
    this.parent.innerHTML = '';
    this.parent.className = '';

    let name = this.getNameFromLocation();

    let fruit = this.db.fetchByName(name);
    this.parent.className = 'detail';

    let section = document.createElement('section');
    this.parent.insertAdjacentElement('beforeend', section);

    if (fruit && fruit.name) {
      section.insertAdjacentHTML('afterbegin',`<h2>${fruit.name}</h2>`);
      section.insertAdjacentHTML('beforeend',`<p>Color: ${fruit.color}</p>`)
      section.insertAdjacentHTML('beforeend',`<p>Count: ${fruit.count}</p>`)
    }
    else {
      section.insertAdjacentHTML('afterbegin', '<h2>Invalid URL</h2>');
      section.insertAdjacentHTML('beforeend', '<p>We could not find a valid fruit name in the URL path. Please choose a fruit link from the home page.</p>')
    }
  }

  // Parse the name out of the location.
  // The router should insure that the pathname is of the form /fruit/[name],
  // so we just need to split the pathname by '/' and return the last element
  // from the resulting array
  getNameFromLocation() {
    let a = location.pathname.split('/')
    return a[a.length-1];
  }
}
