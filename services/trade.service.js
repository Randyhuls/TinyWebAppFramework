import { HTTP } from './http.service.js'

export class TradeService {

    constructor() {
        this.BASE_URL = "http://www.some-url.com/trades/"
    }

    static requestTradeWithUserByPlayerById(playerId) {
        let URL = `${this.BASE_URL}request-trade?playerid=${id}` // player here is the opposing player
        return HTTP.get(URL)
    }

    /**
     * @description Adds the items to the current trade request
     * @param items: array of items
     * @returns {*}
     */
    static submitItemsToTrade(tradeId, items) {
        let URL = `${this.BASE_URL}submit-trade?tradeid=${tradeId}/`
        return HTTP.post(URL)
    }

    /**
     * @description Confirm trade; tradeId should be returned by server
     * @param tradeId
     * @returns {*}
     */
    static confirmTrade(tradeId) {
        let URL = `${this.BASE_URL}confirm-trade?tradeid=${tradeId}/`
        return HTTP.post(URL)
    }
}