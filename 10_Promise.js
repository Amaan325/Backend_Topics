let num  ;
const promise = new Promise((resolve , reject) => {
  if(num)
     resolve("It contains value")
  else
     reject("not contains a value")
})

promise
  .then((result) => console.log(result))
  .then(() => console.log("Done"))
  .catch((result) => console.log(result))