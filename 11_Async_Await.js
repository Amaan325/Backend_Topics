const user = [
    { id: 1, name: "Amaan" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Kashan" },
  ];
  
  const articles = [
    { id: 5, article: ["one", "two", "three"] },
    { id: 2, article: ["four", "five"] },
    { id: 3, article: ["six"] },
  ];
  
  const findUser = async () => {
      try{
          const findUserId = await getUser("li") ;
          const findArticle = await getArticle(findUserId.id)
          console.log(findArticle)
      }
      catch(error) {
          console.log(error)
      }
  }
  
  findUser() ;
  function getUser(name) {
    return new Promise((resolve, reject) => {
      const naam = user.find((ele) => ele.name === name);
      if (naam) resolve(naam);
      else reject("User not found");
    });
  }
  
  function getArticle(userId) {
    return new Promise((resolve, reject) => {
      const actualArticle = articles.find((ele) => ele.id === userId);
      if (actualArticle) resolve(actualArticle);
      else reject("Article not found");
    });
  }
  
  // findUser("Amaan")
  //   .then((result) => findArticle(result.id).then((result) => console.log(result)))
  //   .catch((data) => console.log(data));
  
  // function findUser(name) {
  //   return new Promise((resolve, reject) => {
  //     const naam = user.find((ele) => ele.name === name);
  //     if (naam) resolve(naam);
  //     else reject(`User "${name}" not found`);
  //   });
  // }
  
  // function findArticle(userId) {
  //   return new Promise((resolve, reject) => {
  //     const actualUser = articles.find((ele) => ele.id === userId);
  //     if (actualUser) resolve(actualUser);
  //     else reject("Articles Not found");
  //   });
  // }
  
  // function findUserId(name , callback){
  //    const naam = user.find((ele) => ele.name === name) ;
  //     return callback(naam.id)
  // }
  // function findArticles(userId){
  //     const userInfo = articles.find((ele) => ele.id === userId) ;
  //     return userInfo ;
  // }
  // console.log(findUserId("Ali" , findArticles))
  