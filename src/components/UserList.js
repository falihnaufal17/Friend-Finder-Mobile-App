import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Text, Left, Body, List, ListItem, Thumbnail } from 'native-base';
import { Database } from '../publics/configs/db'

export class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.user()
    }

    componentDidMount = async () => {
        await this.user()
    }

    user = () => {
        Database.ref('/user').once('value', (result) => {
            let data = result.val();
            if (data !== null) {
                let users = Object.values(data);
                this.setState({
                    users: users
                })
            }
        });
    }

    _renderItem = ({ item }) => {
        return (
            <List key={item.uid}>
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
        )
    }

    render() {
        console.warn("list user: ", this.state.users)
        return (
            <FlatList
                data={this.state.users}
                renderItem={this._renderItem}
                keyExtractor={item => item.uid}
            />
        )
    }
}

export default UserList
