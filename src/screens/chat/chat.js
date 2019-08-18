import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { Header, Left, Icon, Body, Thumbnail, Right, Button, Title } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello Developer',
                    createdat: new Date(),
                    user: {
                        _id: 2,
                        name: 'Ucing Gelo',
                        avatar: 'https://placeimg.com/140/140/any'
                    }
                }
            ]
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }))
    }

    render() {
        return (
            <>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('ChatList')}
                        >
                            <Icon name="arrow-round-back" type="Ionicons" style={styles.iconStyle} />
                        </Button>
                    </Left>
                    <Body>
                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} rounded style={styles.avatar} />
                    </Body>
                    <Body>
                        <Title>Ucing Gelo</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => alert('pencetan')}
                        >
                            <Icon name="videocam" type="Ionicons" style={styles.iconStyle} />
                        </Button>
                        <Button
                            transparent
                            onPress={() => alert('pencetan')}
                        >
                            <Icon name="call" type="Ionicons" style={styles.iconStyle} />
                        </Button>
                    </Right>
                </Header>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1
                    }}
                />
            </>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderColor: 'white',
        borderWidth: 1
    },
    iconStyle: {
        color: 'white',
        marginHorizontal: 10
    }
})

export default Chat
