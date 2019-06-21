import { Navigation } from 'react-native-navigation'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './redux'
import HomeScreen from './Home'

YellowBox.ignoreWarnings(['Attempted to invoke', 'unknown call', 'Possible'])

export const registerScreens = () => {
    Navigation.registerComponentWithRedux('Home', () => HomeScreen, Provider, store)
}