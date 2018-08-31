# SPWA (Single Page Web App)

This project is basically a proof of concept for a very lightweight JavaScript router that I am to use in my Udacity Mobile Web Specialist course project. For my class work, I needed to create my own router without using jQuery or any framework. I've built a simple fruit app around the router (/app/router.js) to simulate my use case.

The router (/app/router.js) only concerns itself with URL pathname -- ignoring search and hash.

Limitations: Since I am not using hash for the internal links, deep linking from external sites or entering internal URLs directly in the browser's address bar is not handled by this router. You can handle that case by configuring your server to direct internal paths through index.html. Then, the JavaScript router will take over and render the proper view. In this project, I have a simple ExpressJS server that serves this purpose.

Though the router can use regular expressions for route matching, it does not pull parameters or arguments out of the path. The renderView code inside the view object must handle any necessary parsing of location.pathname to pull parameters. You'll find an example of that in detail.js.

## Example:

The example creates a very simple fruit app and has a list view for the root URL and a detail view with paths such as '/fruit/apple'.

## Installation and Running

1. Clone the repository:

  ```
  git clone https://github.com/steve-christensen/diy-spa.git
  ```

2. Install dependencies:

  ```
  npm install
  ```

3. Start the server:

  ```
  npm start
  ```
  or

  ```
  node server
  ```

## Router Usage

``` JavaScript
// Import the Router class
import { Router } from './router.js';

// Import the views. Each view defines a class that includes
// a renderView method.
// TODO: Create a base View class that these classes could extend
import { List } from './list/list.js';
import { Detail } from './detail/detail.js';

// ServeFile is a special view that the HTML to be rendered from a static
// file. In this example, I use it for rendering the error page.
import { ServeFile } from './serve-file.js';

// Initialize the list and detail views
const list = new List();
const detail = new Detail();

// Initialize the router passing an instance of ServeFile to act as the error view.
const router = new Router(new ServeFile('/page404.html'));

// Add the routes:
// Use a string to match the root page and display the list view.
router.addRoute('/', list);

// Use a RegExp for matching detail pages.
router.addRoute(/^\/fruit\/[^\/#?]*$/, detail);

// Call the render function directly to render the first view
router.render(location);
```

## Acknowledgements

I read several articles and looked at various examples before I started coding. Though I did not keep track of those sources, I very much appreciate that they shared their knowledge.
