const path = require('path')
const absolute_path = path.resolve('./new0file')
console.log(absolute_path)
const isabsolute = path.isAbsolute('./app1.js')
console.log(isabsolute)