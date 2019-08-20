import React, { Component } from 'react'
import { FlatList, AsyncStorage as storage } from 'react-native'
import { Text, Left, Body, List, ListItem, Thumbnail } from 'native-base';
import { Database } from '../publics/configs/db'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'

export class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            data: []
        }
    }

    componentWillMount = async () => {
        let dbref = Database.ref('/user')
        let email = await storage.getItem('email')
        dbref.on('child_added', (val) => {
            let person = val.val()
            console.warn("person", person.email.toLowerCase())
            console.warn("email", email)
            if (person.email.toLowerCase() === email) {
                email = person.email.toLowerCase()
            } else {
                this.setState((prevState) => {
                    return {
                        users: [...prevState.users, person]
                    }
                })
            }
        })
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Chat', { data: item })}>
                <List key={item.id}>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: item.avatar }} />
                        </Left>
                        <Body>
                            <Text>{item.fullname}</Text>
                            <Text note>{item.status}</Text>
                        </Body>
                    </ListItem>
                </List>
            </TouchableOpacity>
        )
    }

    render() {
        console.warn("list user: ", this.state.users)
        return (
            <FlatList
                data={this.state.users}
                renderItem={this._renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        )
    }
}

export default withNavigation(UserList)
