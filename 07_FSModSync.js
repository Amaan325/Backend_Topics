const {readFileSync , writeFileSync, read} = require('fs') ;

const first = readFileSync('./contents/first.txt' , "utf-8")
const second = readFileSync('./contents/second.txt', "utf-8")

writeFileSync(
    "./contents/third.txt" ,
    "i am alone , sad , desperate for love" ,
    { flag : 'a'} 
)