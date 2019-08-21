import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Text, Item, Icon, Input, Header, Left, Body, Title, Label, Thumbnail, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker'
export class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentAvatar: this.props.navigation.getParam('avatar'),
            avatar: null,
            fullname: this.props.navigation.getParam('fullname')
        }
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        }

        ImagePicker.showImagePicker(options, response => {
            if (response.uri) {
                this.setState({ avatar: response })
            }
        })
    }
    render() {
        const { avatar, fullname, currentAvatar } = this.state
        return (
            <><StatusBar translucent={false} backgroundColor="transparent" />
                <Header>
                    <Left>
                        <Icon name="arrow-round-back" type="Ionicons" style={{ color: 'white' }} />
                    </Left>
                    <Body>
                        <Title>Edit Profile</Title>
                    </Body>
                </Header>
                <View style={styles.root}>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.handleChoosePhoto}>
                        {avatar &&
                            (<Thumbnail source={{ uri: avatar.uri }} style={styles.avatar} />) ||
                            currentAvatar && (<Thumbnail source={{ uri: currentAvatar }} style={styles.avatar} />)
                        }
                        <Icon name="ios-create" type="Ionicons" style={styles.iconStyle} />
                    </TouchableOpacity>
                    <Item style={styles.formInput} floatingLabel>
                        <Icon name="user" type="FontAwesome" style={styles.icon} />
                        <Label style={styles.icon}>Fullname</Label>
                        <Input onChangeText={fullname => this.setState({ fullname })} style={styles.textInput} value={fullname} />
                    </Item>
                    <Button primary rounded style={{ width: 300 }}>
                        <Text style={{ textAlign: 'center', width: '100%' }}>Edit</Text>
                    </Button>
                </View>
            </>
        )
    }
}

export default EditProfile

const styles = StyleSheet.create({
    iconStyle: {
        position: 'absolute',
        top: 65,
        color: 'steelblue',
        left: 65
    },
    avatar: {
        borderColor: 'white',
        borderWidth: 2,
        width: 90,
        height: 90,
        borderRadius: 100 / 2
    },
    formInput: {
        width: 300,
        marginHorizontal: 10,
        marginVertical: 30
    },
    textInput: {
        color: 'black'
    },
    icon: {
        color: 'black',
        marginHorizontal: 10
    },
    root: {
        flex: 1,
        marginVertical: 10,
        alignItems: 'center',
        alignSelf: 'center'
    }
})