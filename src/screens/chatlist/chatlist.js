import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Text, Header, Left, Icon, Button, Body, Title, Fab, Subtitle, View } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChatLists from '../../components/ChatList'
export class chatlist extends Component {
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
                        <Subtitle>Chat List</Subtitle>
                    </Body>
                </Header>

                <ChatLists />

                <Fab
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('UserList')}
                >
                    <Icon name="people" type="Ionicons" style={{ fontSize: 25 }} />
                </Fab>
            </>
        )
    }
}

export default chatlist
