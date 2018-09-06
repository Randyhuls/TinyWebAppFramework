import { HTTP } from './http.service.js';

export class MobService {

    constructor() {
        this.BASE_URL = "http://www.some-url.com/mobs/"
    }

    static getMobById(mobId) {
        let URL = `${this.BASE_URL}mob?id=${id}`
        return HTTP.get(URL)
    }

    static getDropsByMobId(mobId) {
        let URL = `${this.BASE_URL}drops/mob?id=${id}`
        return HTTP.get(URL)
    }
}