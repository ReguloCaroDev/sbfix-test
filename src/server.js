/* 
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./prueba'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: './src/'}), 
    res.sendFile('app.component.html', {root: './src/app/'}),
);


app.listen(process.env.PORT || 8080);


 */

/* const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + 'prueba'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
 */
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/prueba'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/prueba/index.html'));});
app.listen(process.env.PORT || 8080);
