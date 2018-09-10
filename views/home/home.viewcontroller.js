// HTML template
import * as HomeTemplate from './home.html'

// Models
import { ViewController } from '../../models/viewcontroller.model'

// Services
import { PlayerService } from '../../services/player.service.js'
import { MobService } from '../../services/mob.service.js'
import { ItemService } from '../../services/item.service.js'
import { TradeService } from '../../services/trade.service.js'

export class HomeViewController extends ViewController {

    constructor() {
        super('Home', HomeTemplate)
    }

    viewWillLoad() {
        super.viewWillLoad()
        console.log('HomeViewController.viewWillLoad --> The view is about to load')

        // TODO:  Here you can perform things just before the view has loaded, like making API calls
        // PlayerService.getPlayerById('098765')
        // MobService.getDropsByMobId('012345')
        // ItemService.getItemById('654321')
        // TradeService.requestTradeWithUserByPlayerById('098765')
    }

    viewDidLoad() {
        super.viewDidLoad()
        console.log('HomeViewController.viewDidLoad --> The view has finished loading')

        // TODO: Here you can perform things right after the view has loaded, like UI changes
        // doSomething()
    }

    viewWillUnload() {
        super.viewWillUnload()
        console.log('HomeViewController.viewWillUnload --> The view will unload from the rootview')

        // TODO: Here you can perform things just before the view is about to be unloaded
    }

    viewDidUnload() {
        super.viewDidUnload()
        console.log('HomeViewController.viewDidUnload --> The view was unloaded from the rootview')

        // TODO: Here you can perform things right after the view has unloaded
    }

    doSomething() {
        // TODO: some function
    }
}