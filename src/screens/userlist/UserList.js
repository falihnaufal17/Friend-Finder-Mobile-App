import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header, Left, Button, Right, Icon, Body, Title, List, ListItem, Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';

class UserList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Header>
                    <Left>
                        <Button transparent rounded onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Friend Finder</Title>
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
                            <Text>Person</Text>
                            <Text note>Hi there i'm using friend finder!</Text>
                        </Body>
                        <Right>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Chat')}
                            >
                                <Icon name="comment" type="FontAwesome" style={{ fontSize: 25 }} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                </List>
            </>
        )
    }
}
export default UserList