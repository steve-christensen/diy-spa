const express = require('express');
const app = express();

const sendOptions = {
  root: '/'
}

/* serves main page */
app.get("/", function(req, res) {
  console.log('Serving root.');
  res.sendfile('index.html');
});

/* serves all the static files assuming that static files have a
 * period followed by an extension */
app.get(/^(.+\..+)$/, function(req, res){
   console.log('static file request : ' + req.params);
   res.sendfile( __dirname + req.params[0]);
});

/* Deep links will not have an extension. Respond with index.html
 * and let the web app handle the routing */
app.get(/(.+)$/, (req, res) => {
  console.log('serving deep link : ' + req.params);
  res.sendfile('index.html');
});

 var port = process.env.PORT || 8002;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });
