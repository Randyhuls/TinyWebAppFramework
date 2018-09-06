import { HTTP } from './http.service.js'

export class PlayerService {

    constructor() {
        this.BASE_URL = "http://www.some-url.com/players/"
    }

    static getPlayerById(playerId) {
        let URL = `${this.BASE_URL}player?id=${id}`
        return HTTP.get(URL)
    }

    static getCharactersByPlayerId(playerId) {
        let URL = `${this.BASE_URL}player/characters?playerid=${playerId}`
        return HTTP.get(URL)
    }

    static getCharacterById(characterId) {
        let URL = `${this.BASE_URL}player/character?characterid=${characterId}`
        return HTTP.get(URL)
    }
}