import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'https://gateway.marvel.com/v1/public/';
const privateKey = 'e3bbad0cda7a5dfb5638593490a121d03e87c886';
const publicKey = '0d3471b572698cd12b6c88dcaf4ae453';
const time = Number(new Date());
const hash =  md5(time + privateKey + publicKey);
const CONFIG = `?ts=${time}&apikey=${publicKey}&hash=${hash}`;

export class marvelApi {
  
  static getAllCharacters = async (limit: number, callback: any) => {
    console.warn('getting all characters...');
    const urlCharacters = baseUrl + 'characters' + CONFIG + '&limit=' + limit;
    const request = await axios.get(urlCharacters)
    callback(request)
    console.warn('getting all character successfully!')
  }
  static getCharacterName = async (query: string, callback: any) => {
    const hash = '03247d10af559a64150bce620ec1f01e'
    const request = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=f929fc77911a47c2a28a5fda5cb17dcb&hash=${hash}`)
    callback(request)
  }
  static orderByDesc = async (callback: any) => {
    console.warn('ordering descending...');
    const urlCharacters = baseUrl + 'characters' + CONFIG + '&orderBy=-name' + '&limit=20';
    const request = await axios.get(urlCharacters)
    callback(request)
    console.warn('ordered descending successfully!')

  }
  static orderByAcd = async (callback: any) => {
    console.warn('ordering ascending...');
    const urlCharacters = baseUrl + 'characters' + CONFIG + '&orderBy=name' + '&limit=20';
    const request = await axios.get(urlCharacters)
    callback(request)
    console.warn('ordered ascending successfully!');
  }
}

// https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider&apikey=0d3471b572698cd12b6c88dcaf4ae453
// http://gateway.marvel.com/v1/public/characters?nameStartsWith=Wolwe?ts=1656540703675&apikey=0d3471b572698cd12b6c88dcaf4ae453&hash=dfe9e0c54f46e1bb4ebf7ae65a9767b6
