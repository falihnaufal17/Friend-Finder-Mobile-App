import React, { Component } from 'react'
import { StatusBar, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'

export default class Register extends Component {
    render() {
        return (
            <View style={styles.root}>
                <StatusBar hidden translucent={true} />
                <Image style={styles.imgBackground} source={require('../../assets/images/1800x1200_diabetes_what_friends_should_know_slideshow.jpg')} resizeMode='cover' />
                <Text style={styles.title}> SIGN UP </Text>
                <Item rounded style={styles.formInput}>
                    <Icon name="user" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Fullname" placeholderTextColor="white" style={styles.textInput} />
                </Item>
                <Item rounded style={styles.formInput}>
                    <Icon name="envelope" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Email" placeholderTextColor="white" style={styles.textInput} />
                </Item>
                <Item rounded style={styles.formInput}>
                    <Icon name="key" type="FontAwesome" style={styles.icon} />
                    <Input placeholder="Password" placeholderTextColor="white" secureTextEntry={true} style={styles.textInput} />
                </Item>

                <TouchableOpacity style={styles.btnSignUp}>
                    <Text style={styles.txtSignUp}>SIGN IN</Text>
                </TouchableOpacity>

                <Button rounded dark onPress={() => alert('pencetan')} style={styles.btnSignIn}>
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