import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, AsyncStorage as storage, Image } from 'react-native'
import { Fab, Icon } from 'native-base'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import GetLocation from 'react-native-get-location'
import { Database } from '../../publics/configs/db'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mapRegion: null,
            latitude: 0,
            longitude: 0,
            users: []
        }
        this.user()

    }
    componentDidMount = async () => {
        await this.getCurrentPosition()
    }

    getCurrentPosition() {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.warn(location.latitude);

                let region = {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.00922 * 1.5,
                    longitudeDelta: 0.00421 * 1.5
                }

                this.setState({
                    mapRegion: region,
                    latitude: location.latitude,
                    longitude: location.longitude
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }

    user = async () => {
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

    render() {
        console.warn("longitude", this.state.longitude)
        console.warn("latitude", this.state.latitude)
        console.warn("data", this.state.users)
        return (
            <>
                <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        showsMyLocationButton={true}
                        showsIndoorLevelPicker={true}
                        showsUserLocation={true}
                        zoomControlEnabled={true}
                        showsCompass={true}
                        showsTraffic={true}
                        showsBuildings={true}
                        showsScale={true}
                        style={styles.map}
                        region={this.state.mapRegion}
                    >
                        {
                            this.state.users.map((item) => {
                                return (
                                    <Marker
                                        draggable
                                        coordinate={{
                                            latitude: item.latitude,
                                            longitude: item.longitude,
                                        }}
                                        title={item.fullname}
                                        description={`${item.latitude} / ${item.longitude}`}
                                    >
                                        <Image
                                            source={{ uri: item.avatar }}
                                            style={{ width: 40, height: 40, borderRadius: 100 / 2 }}
                                        />
                                    </Marker>
                                )
                            })
                        }
                    </MapView>

                    <Fab
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('ChatList')}
                    >
                        <Icon name="people" type="Ionicons" />
                    </Fab>
                    <Fab
                        position="bottomRight"
                        onPress={() => this.getCurrentPosition()}
                        style={{ marginVertical: 80, backgroundColor: 'white' }}

                    >
                        <Icon name="locate" type="Ionicons" style={{ color: 'steelblue' }} />
                    </Fab>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    }
})