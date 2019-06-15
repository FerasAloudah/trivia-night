
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Home from '../screens/HomeActivity';
import Main from '../screens/MainActivity';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Main: { screen: Main },
});

const App = createAppContainer(AppNavigator);

export default App;