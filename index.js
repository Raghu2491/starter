/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import Home from './Home';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => Home);

import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

registerScreens()
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Home',
                options: {
                    animations: {
                        setRoot: {
                            waitForRender: true,
                        },
                    },
                },
            },
        },
    })
})
