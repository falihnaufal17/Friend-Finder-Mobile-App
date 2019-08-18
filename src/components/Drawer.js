import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { List, ListItem, Left, Icon, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Drawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.background}>
                    <Image style={styles.imgBackground} source={require('../assets/images/8357196-portrait-of-five-friends-having-fun-at-karaoke-party.jpg')} resizeMode="stretch" />
                    <Image source={{ uri: 'https://res.cloudinary.com/dnqtceffv/image/upload/v1565670582/qavsu8pjpmzl2qowt4rv.jpg' }} style={styles.avatar} />
                </View>
                <View style={styles.viewProfileData}>
                    <Text style={styles.txtFullname}>Falih Naufal</Text>
                    <Text style={styles.txtEmail}>falihnaufal1700@gmail.com</Text>
                </View>
                <List>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <ListItem>
                            <Left>
                                <Text style={styles.txtMenu}><Icon name="map" type="Ionicons" style={styles.iconStyle} /> Map</Text>
                            </Left>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Profile')}
                    >
                        <ListItem>
                            <Left>
                                <Text style={styles.txtMenu}><Icon name="person" type="Ionicons" style={styles.iconStyle} /> Profile</Text>
                            </Left>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('UserList')}
                    >
                        <ListItem>
                            <Left>
                                <Text style={styles.txtMenu}><Icon name="people" type="Ionicons" style={styles.iconStyle} /> Friend List</Text>
                            </Left>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <ListItem>
                            <Left>
                                <Text style={styles.txtMenu}><Icon name="exit" type="Ionicons" style={[styles.iconStyle, { color: 'red' }]} /> Logout</Text>
                            </Left>
                        </ListItem>
                    </TouchableOpacity>
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    txtMenu: {
        fontSize: 14,
        width: '100%'
    },
    iconStyle: {
        color: 'steelblue',
        fontSize: 20,
    },
    txtEmail: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txtFullname: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5
    },
    viewProfileData: {
        position: 'absolute',
        top: 100,
        alignSelf: 'center'
    },
    avatar: {
        position: 'absolute',
        top: 25,
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100 / 2
    },
    background: {
        backgroundColor: '#4054b5',
    },
    imgBackground: {
        width: '100%',
        height: 180,
        opacity: 0.6,
    },
    container: {
        flex: 1
    }
})

export default Drawer
