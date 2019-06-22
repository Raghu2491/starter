import { Navigation } from 'react-native-navigation'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import { store } from '../redux/redux'
import HomeScreen from '../screens/Home'
import Car from '../screens/Car'

YellowBox.ignoreWarnings(['Attempted to invoke', 'unknown call', 'Possible']);

export const registerScreens = () => {
    Navigation.registerComponentWithRedux('Home', () => HomeScreen, Provider, store)
    Navigation.registerComponentWithRedux('Car', () => Car, Provider, store)
}