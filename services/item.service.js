import { HTTP } from './http.service.js'

export class ItemService {

    constructor() {
        this.BASE_URL = "http://www.some-url.com/items/"
    }

    static getItemById(itemId) {
        let URL = `${this.BASE_URL}item?id=${id}`
        return HTTP.get(URL)
    }

    static getItemsByPlayerId(playerId) {
        let URL = `${this.BASE_URL}items/player?id=${id}`
        return HTTP.get(URL)
    }

    static getItemsByMobId(playerId) {
        let URL = `${this.BASE_URL}items/mob?id=${id}`
        return HTTP.get(URL)
    }


}