import { createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Drawer from '../../components/Drawer'
import Home from '../../screens/home/Home'
import Login from '../../screens/login/Login'
import Register from '../../screens/register/Register'
import UserList from '../../screens/userlist/UserList'
import ChatList from '../../screens/chatlist/chatlist';
import Chat from '../../screens/chat/chat'
import Profile from '../../screens/profiles/profile';
import ProfileFriend from '../../screens/profiles/profileFriend'

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
    },
    ChatList: {
        screen: ChatList,
        navigationOptions: {
            header: null
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            header: null
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },
    ProfileFriend: {
        screen: ProfileFriend,
        navigationOptions: {
            header: null
        }
    }
}, {
        initialRouteName: 'Login'
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