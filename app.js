const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

let url = 'http://jsonplaceholder.typicode.com/posts';

// creating result folder
fs.mkdir(path.join(__dirname, '/result'), {}, err =>{
  if (err) throw err;
});

// getting the JSON data with FetchAPI
fetch(url)
.then(res => res.json())
.then((out) => {
   return fs.writeFile('./result/post.json', JSON.stringify(out, null, 2), err => {
    if (err) console.log(err);
})
})
.catch(err => { throw err });

