import { createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Drawer from '../../components/Drawer'
import Home from '../../screens/home/Home'
import Login from '../../screens/login/Login'
import Register from '../../screens/register/Register'
import UserList from '../../screens/userlist/UserList'

const StackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    UserList: {
        screen: UserList,
        navigationOptions: {
            header: null
        }
    }
}, {
        initialRouteName: 'UserList'
    })

const DrawerNavigator = createDrawerNavigator({
    StackNavigator,
}, {
        contentComponent: Drawer,
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: '#6b52ae',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
        }
    })

export default createAppContainer(DrawerNavigator)