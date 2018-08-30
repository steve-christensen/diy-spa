// Import the Router class
import { Router } from './router.js';

// Import the views. Each view defines a class that includes
// a renderView method.
// TODO: Create a base View class that these classes could extend
import { List } from './list/list.js';
import { Detail } from './detail/detail.js';

// ServeFile is a special view that reads the HTML to be rendered from a static
// file. In this example, I use it for rendering the error page.
import { ServeFile } from './serve-file.js';

// Initialize the list and detail views
const list = new List();
const detail = new Detail();

// Initialize the router passing an instance of ServeFile.
const router = new Router(new ServeFile('/page404.html'));

// Add the routes:
// Use a string to match the root page and display the list view.
router.addRoute('/', list);

// Use a RegExp for matching detail pages.
router.addRoute(/^\/fruit\/[^\/#?]*$/, detail);

// Call the render function directly to render the first view
router.render(location);
