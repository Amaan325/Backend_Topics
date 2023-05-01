const fs = require('fs')
fs.readFile('./contents/first.txt' , 'utf8' , (err,result) => {
    if(err)
      throw err ;
    const first = result ;
    fs.readFile('./contents/second.txt' , 'utf8' , (err,result) => {
        if(err)
          throw err ;
        const second = result;
        fs.writeFile('./contents/third1.txt' ,
                      `The collective text is ${first} ${second}`,
                      {flag : 'a'} , (err,result) => {
                        if(err)
                           throw err ;
                        console.log(result)
                      })
    })
})