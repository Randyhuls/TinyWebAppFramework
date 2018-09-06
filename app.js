import { ViewController } from './models/viewcontroller.model.js';
import { MobService } from './services/mob.service.js';

new (class App extends ViewController {

    viewBeforeLoad() {
        super.viewBeforeLoad()
        console.log('viewBeforeLoad --> The view has is about to load')

        // TODO: Here you can start making API calls
        // MobService.getDropsByMobId('012345')
    }

    viewDidLoad() {
        super.viewDidLoad()
        console.log('viewDidLoad --> The view has finished loading')

    }

    doSomething() {
        // TODO: some function
    }
})()