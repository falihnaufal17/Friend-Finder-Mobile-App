import React, { Component } from 'react'
import { StatusBar, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.root}>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <Image style={styles.imgBackground} source={require('../../assets/images/94545326-cheerful-friends-taking-selfie-on-a-holiday-group-of-men-and-women-sitting-outdoors-on-a-summer-day-.jpg')} resizeMode='cover' />
                <Text style={styles.title}> SIGN IN </Text>
                <Item rounded style={styles.formInput}>
                    <Icon name="envelope" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Email" placeholderTextColor="white" style={styles.textInput} />
                </Item>
                <Item rounded style={styles.formInput}>
                    <Icon name="key" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Password" placeholderTextColor="white" secureTextEntry={true} style={styles.textInput} />
                </Item>

                <TouchableOpacity style={styles.btnSignUp} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.txtSignUp}>SIGN UP</Text>
                </TouchableOpacity>

                <Button rounded dark onPress={() => this.props.navigation.navigate('Home')} style={styles.btnSignIn}>
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