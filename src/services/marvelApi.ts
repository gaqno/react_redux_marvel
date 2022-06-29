import axios from "axios";
import md5 from "md5";

const baseUrl = "http://gateway.marvel.com/v1/public/";
const privateKey = "e3bbad0cda7a5dfb5638593490a121d03e87c886";
const publicKey = "0d3471b572698cd12b6c88dcaf4ae453";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);
const CONFIG = `?ts=${time}&apikey=${publicKey}&hash=${hash}`;

export default {
  getAllCharacters: (limit: number, callback: any) => {
    const urlCharacters = baseUrl + 'characters' + CONFIG + '&limit=' + limit;
    axios.get(urlCharacters).then((characters) => {
      if (callback) {
        callback(characters);
      }
    })
  }
}
