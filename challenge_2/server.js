const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));



app.listen(3333, function() {
  console.log('Listening on port 3333 now');
});



