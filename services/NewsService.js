import axios from 'axios';

const key = 'be0de1e697fa4d949d967acd53ad6b31';

export default class NewsService {
    getNewsByCategorie( categorie ) {
      return axios.get( `https://newsapi.org/v2/top-headlines?category=${categorie}&apiKey=${key}` )
    }
}