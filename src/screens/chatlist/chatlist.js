import React, { Component } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { Header, Left, Icon, Button, Right, Body, Title, Thumbnail, List, ListItem, Fab } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

export class chatlist extends Component {
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
                </Header>
                <List>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://res.cloudinary.com/dnqtceffv/image/upload/v1565841345/w4erugmcy0csw2cvjmx7.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Nathalia Gabryel</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://res.cloudinary.com/dnqtceffv/image/upload/v1565322418/gqo951gytzeghyjz7irq.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Rizki Gumilar</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://res.cloudinary.com/dnqtceffv/image/upload/v1565181869/iqvsmhnwr0viowxsooke.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Nurmala Daenila</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                </List>
                <Fab
                    position="bottomRight"
                >
                    <Icon name="comment" type="FontAwesome" style={{ fontSize: 25 }} />
                </Fab>
            </>
        )
    }
}

export default chatlist
