import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Text, Header, Left, Button, Right, Icon, Body, Title, List, ListItem, Thumbnail, Subtitle } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

class UserList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <StatusBar translucent={false} backgroundColor="transparent" />
                <Header>
                    <Left>
                        <Button transparent rounded onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Friend Finder</Title>
                        <Subtitle>Friend List</Subtitle>
                    </Body>
                    <Right>
                        <Button transparent rounded onPress={() => this.props.navigation.navigate('ChatList')}>
                            <Icon name="ios-chatbubbles" type="Ionicons" />
                        </Button>
                    </Right>
                </Header>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://res.cloudinary.com/dnqtceffv/image/upload/v1565841345/w4erugmcy0csw2cvjmx7.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Nathalia Gabryel</Text>
                            <Text note>Hi there i'm using friend finder!</Text>
                        </Body>
                    </ListItem>
                </List>
            </>
        )
    }
}
export default UserList