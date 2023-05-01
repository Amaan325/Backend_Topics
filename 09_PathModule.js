const path = require('path')
console.log(path.sep)
const full_path = path.join(__dirname ,'contents' ,'/subfolders', 'test.txt') ;
console.log(full_path)

const base_path = path.basename(full_path)
console.log(base_path)

const rel_path = path.relative('/contents' ,'/subfolders', 'test.txt') ;
console.log(rel_path)

const absolute_path = path.resolve('./app.js')
console.log(absolute_path)