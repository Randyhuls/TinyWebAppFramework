import { ViewController } from './models/viewcontroller.model.js';
import { PlayerService } from './services/player.service.js';
import { MobService } from './services/mob.service.js';
import { ItemService } from './services/item.service.js';
import { TradeService } from './services/trade.service.js';

new (class App extends ViewController {

    viewBeforeLoad() {
        super.viewBeforeLoad()
        console.log('viewBeforeLoad --> The view has is about to load')

        // TODO: Here you can start making API calls
        // PlayerService.getPlayerById('098765')
        // MobService.getDropsByMobId('012345')
        // ItemService.getItemById('654321')
        // TradeService.requestTradeWithUserByPlayerById('098765')
    }

    viewDidLoad() {
        super.viewDidLoad()
        console.log('viewDidLoad --> The view has finished loading')

        // TODO: Here you can perform an UI changes
        // doSomething()
    }

    doSomething() {
        // TODO: some function
    }
})()