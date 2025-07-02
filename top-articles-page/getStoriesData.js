const URL = "https://hacker-news.firebaseio.com/v0/item/"

const getArticles = async(items) => {
    console.log('receving item', items);
    const articles = [];

    for(let item of items){
     const res = await fetch(`${URL}/${item}.json`)
     const data = await res.json();
     articles.push(data);
    
    //  return data;
     
    }
    console.log('received articles', articles);
    return articles;

    

    
    
}

// const getArticles = async (items) => {
//   const top10 = items.slice(0, 10); // Just to be safe
//   const promises = top10.map(id =>
//     fetch(`${URL}/${id}.json`).then(res => res.json())
//   );
//   const articles = await Promise.all(promises);
//   return articles;
// };

export {getArticles}