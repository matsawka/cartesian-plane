const solution = require('../app/index.js');

var fs = require('fs');
let rawdata = fs.readFileSync('app/json/coordinates.json');  
let items = JSON.parse(rawdata);  
solution.questions(items);





