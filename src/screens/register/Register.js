import React, { Component } from 'react'
import { StatusBar, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'
import { Database, Auth } from '../../publics/configs/db'
import GetLocation from 'react-native-get-location'

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullname: '',
            email: '',
            password: '',
            latitude: 0,
            longitude: 0,
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
                console.warn(location.latitude);

                let region = {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.00922 * 1.5,
                    longitudeDelta: 0.00421 * 1.5
                }

                this.setState({
                    mapRegion: region,
                    latitude: location.latitude,
                    longitude: location.longitude
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }

    _handleRegister = () => {
        if (this.state.fullname === '' || this.state.email === '' || this.state.password === '') {
            alert('Oops form ada yang kosong isi dengan lengkap yah')
        } else {
            Auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((response) => {
                    console.warn(response)
                    Database.ref('/user/' + response.user.uid).set({
                        fullname: this.state.fullname,
                        status: 'offline',
                        email: this.state.email,
                        avatar: 'https://res.cloudinary.com/dnqtceffv/image/upload/v1566043986/srhwjzljnfq79cg2glov.png',
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        id: response.user.uid
                    })
                    alert('Horeee registrasi berhasil')
                    this.props.navigation.navigate('AuthLoading')
                })
                .catch(error => {
                    alert(error.message)

                    this.props.navigation.navigate('Register')
                })
        }
    }

    render() {
        return (
            <View style={styles.root}>
                <StatusBar hidden translucent={true} />
                <Image style={styles.imgBackground} source={require('../../assets/images/1800x1200_diabetes_what_friends_should_know_slideshow.jpg')} resizeMode='cover' />
                <Text style={styles.title}> SIGN UP </Text>
                <Item rounded style={styles.formInput}>
                    <Icon name="user" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Fullname" placeholderTextColor="white" onChangeText={fullname => this.setState({ fullname })} style={styles.textInput} />
                </Item>
                <Item rounded style={styles.formInput}>
                    <Icon name="envelope" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Email" placeholderTextColor="white" onChangeText={email => this.setState({ email })} style={styles.textInput} />
                </Item>
                <Item rounded style={styles.formInput}>
                    <Icon name="key" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Password" placeholderTextColor="white" secureTextEntry={true} onChangeText={password => this.setState({ password })} style={styles.textInput} />
                </Item>

                <TouchableOpacity style={styles.btnSignUp}>
                    <Text style={styles.txtSignUp}>SIGN IN</Text>
                </TouchableOpacity>

                <Button rounded dark onPress={() => this._handleRegister()} style={styles.btnSignIn}>
                    <Icon name="arrow-right" type="FontAwesome" />
                </Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
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
        backgroundColor: 'teal',
        opacity: 0.95,
        width: 300,
        marginHorizontal: 10,
        marginVertical: 10
    },
    icon: {
        color: 'white',
        marginHorizontal: 10
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 30
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.7
    },
    root: {
        flex: 1,
        backgroundColor: 'teal',
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})