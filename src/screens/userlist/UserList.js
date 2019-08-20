import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Header, Left, Button, Right, Icon, Body, Title, Subtitle } from 'native-base';
import Lists from '../../components/UserList'

class UserList extends Component {
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

                <Lists />
            </>
        )
    }
}
export default UserList