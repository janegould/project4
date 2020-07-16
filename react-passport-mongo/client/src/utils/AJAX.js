import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?api_key=";
const APIKEY = "qJ8R8AKKP7sure0IqqVGT6mbRWkhDmaI&q=";
const limit = "&limit=1";
let offset = "&offset=" 


export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query + limit+ offset+ Math.floor(Math.random()*100));
  }
};
