import axios from 'axios'
import md5 from 'md5'

const baseUrl = 'https://gateway.marvel.com/v1/public/'
const privateKey = 'e3bbad0cda7a5dfb5638593490a121d03e87c886'
const publicKey = '0d3471b572698cd12b6c88dcaf4ae453'
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)
const CONFIG = `?ts=${time}&apikey=${publicKey}&hash=${hash}`

export class marvelApi {
  static getAllCharacters = async (limit: number, callback: any) => {
    const urlCharacters = baseUrl + 'characters' + CONFIG + '&limit=' + limit
    const request = await axios.get(urlCharacters)
    callback(request)
  }
  static getCharacterName = async (query: string, callback: any) => {
    const hash = '03247d10af559a64150bce620ec1f01e'
    const request = await axios(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=f929fc77911a47c2a28a5fda5cb17dcb&hash=${hash}`,
    )
    callback(request)
  }
  // static getCharactersOffset = async (offset: number, callback: any) => {
  //   const urlCharacters = baseUrl + 'characters' + '&offset=' + offset + CONFIG
  //   const request = await axios.get(urlCharacters)
  //   callback(request)
  // }
  static getComicsByCharacterId = async (query: number, callback: any) => {
    const hash = '03247d10af559a64150bce620ec1f01e'
    // https://gateway.marvel.com/v1/public/comics?characters=1009717&orderBy=onsaleDate&ts=1&apikey=f929fc77911a47c2a28a5fda5cb17dcb&hash=03247d10af559a64150bce620ec1f01e
    const request = await axios.get(
      `https://gateway.marvel.com/v1/public/comics?characters=${query}&orderBy=onsaleDate&ts=1&apikey=f929fc77911a47c2a28a5fda5cb17dcb&hash=${hash}`,
    )
    callback(request)
  }
  static orderByDesc = async (callback: any) => {
    const urlCharacters = baseUrl + 'characters' + CONFIG + '&orderBy=-name' + '&limit=20'
    const request = await axios.get(urlCharacters)
    callback(request)
  }
  static orderByAcd = async (callback: any) => {
    const urlCharacters = baseUrl + 'characters' + CONFIG + '&orderBy=name' + '&limit=20'
    const request = await axios.get(urlCharacters)
    callback(request)
  }
}

// https://gateway.marvel.com/v1/public/characters?ts=1656785736475&apikey=0d3471b572698cd12b6c88dcaf4ae453&hash=899db2903bfbac6c6cfb6d4b0a06ab1b&limit=20

// https://gateway.marvel.com/v1/public/characters&offset=30?ts=1656785736475&apikey=0d3471b572698cd12b6c88dcaf4ae453&hash=899db2903bfbac6c6cfb6d4b0a06ab1b
