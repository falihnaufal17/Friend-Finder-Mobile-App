import React, { Component } from 'react'
import { StatusBar, Text, View, StyleSheet, Image, TouchableOpacity, AsyncStorage as storage } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'
import { Database, Auth } from '../../publics/configs/db'
import GetLocation from 'react-native-get-location'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            email: '',
            password: '',
            latitude: null,
            longitude: null,
        }
    }

    componentDidMount = async () => {
        await this.getCurrentPosition()
    }

    getCurrentPosition() {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                this.setState({
                    latitude: location.latitude,
                    longitude: location.longitude
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }

    _handleLogin = async () => {
        const { email, password } = this.state
        if (email === '' || password === '') {
            alert('Oops form ada yang kosong isi dengan lengkap yah')
        } else {
            Database.ref('/user').orderByChild('email').equalTo(email).once('value', (result) => {
                let data = result.val()
                console.warn("datanya: ", data)

                if (data !== null) {
                    let users = Object.values(data)

                    storage.setItem('email', users[0].email)
                    storage.setItem('fullname', users[0].fullname)
                    storage.setItem('avatar', users[0].avatar)
                    console.warn("datapribadi", users[0])
                }
            })

            await Auth.signInWithEmailAndPassword(email, password)
                .then((response) => {
                    Database.ref('/user/' + response.user.uid).update({ status: 'online', latitude: this.state.latitude, longitude: this.state.longitude })
                    storage.setItem('userid', response.user.uid)
                    this.props.navigation.navigate('AuthLoading')
                })
                .catch(error => {
                    alert(error.message)
                })
        }
    }

    render() {
        return (
            <View style={styles.root}>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <Image style={styles.imgBackground} source={require('../../assets/images/94545326-cheerful-friends-taking-selfie-on-a-holiday-group-of-men-and-women-sitting-outdoors-on-a-summer-day-.jpg')} resizeMode='cover' />
                <Text style={styles.title}> SIGN IN </Text>
                <Item rounded style={styles.formInput}>
                    <Icon name="envelope" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Email" placeholderTextColor="white" style={styles.textInput} onChangeText={email => this.setState({ email })} />
                </Item>
                <Item rounded style={styles.formInput}>
                    <Icon name="key" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Password" placeholderTextColor="white" secureTextEntry={true} style={styles.textInput} onChangeText={password => this.setState({ password })} />
                </Item>

                <TouchableOpacity style={styles.btnSignUp} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.txtSignUp}>SIGN UP</Text>
                </TouchableOpacity>

                <Button rounded dark onPress={() => this._handleLogin()} style={styles.btnSignIn}>
                    <Icon name="arrow-right" type="FontAwesome" />
                </Button>

                <Text style={styles.txtLoginWith}>Or{'\n'}Login With</Text>

                <Item underline={false} style={{ borderBottomColor: 'transparent' }}>
                    <Button rounded style={styles.btnSignWith}>
                        <Icon name="facebook" type="Zocial" style={styles.iconSignWith} />
                    </Button>
                    <Button rounded danger style={styles.btnSignWith}>
                        <Icon name="google" type="Zocial" style={styles.iconSignWith} />
                    </Button>
                </Item>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconSignWith: {
        fontSize: 18,
        textAlign: 'center'
    },
    btnSignWith: {
        width: 48,
        height: 48,
        marginHorizontal: 10
    },
    txtLoginWith: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    btnSignIn: {
        width: 50,
        height: 50,
        marginRight: 35,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    txtSignUp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    btnSignUp: {
        marginLeft: 35,
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    textInput: {
        color: 'white'
    },
    formInput: {
        backgroundColor: 'salmon',
        opacity: 0.8,
        width: 300,
        marginHorizontal: 10,
        marginVertical: 20
    },
    icon: {
        color: 'white',
        marginHorizontal: 10
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.7
    },
    root: {
        flex: 1,
        backgroundColor: 'rgba(222,123,123,1)',
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})