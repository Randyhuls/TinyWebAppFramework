import { HTTP } from './http.service.js';

export class PlayerService {

    constructor() {
        this.BASE_URL = "http://www.some-url.com/players/"
    }

    static getPlayerById(playerId) {
        let URL = `${this.BASE_URL}'mob?id='${id}`
        return HTTP.get(URL)
    }

    static getCharactersByPlayerId(playerId) {
        let URL = `${this.BASE_URL}'drops/mob?id='${id}`
        return HTTP.get(URL)
    }
}