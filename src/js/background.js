
const axios = require('axios');

console.log('initializing background js')

function News(object){
    this.link = object.href
    this.header = object.innerHTML
    this.created = new Date()
}

const backgroundGlobal = {
    news:[]
};
window.backgroundGlobal = backgroundGlobal;

setInterval(()=> {
    axios.get('https://news.ycombinator.com').then(response=>{

        let newnews = getNews(response.data);
        backgroundGlobal.news = getNews(response.data).map(obj => new News(obj))
        
    })
}, 5000)

function getNews(domData) {
    var domparser = new DOMParser();
    var doc = domparser.parseFromString(domData, 'text/html');
    let newnews = [...doc.querySelectorAll('a.storylink')];
    return newnews;
}
