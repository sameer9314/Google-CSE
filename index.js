require('dotenv').config()

var imageSearch = require('node-google-image-search');  

var results = imageSearch('jose kuzhivelil', callback, 0, 1);

function callback(results) {
  // console.log(results[0].kind);
  // console.log(results[0].link);
  console.log(results);
}