import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { Fab, Icon } from 'native-base'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import GetLocation from 'react-native-get-location'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mapRegion: null,
            latitude: 0,
            longitude: 0
        }


    }
    componentDidMount = () => {
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

    render() {
        console.warn("longitude", this.state.longitude)
        console.warn("latitude", this.state.latitude)
        return (
            <>
                <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        showsMyLocationButton={true}
                        showsIndoorLevelPicker={true}
                        style={styles.map}
                        region={this.state.mapRegion}
                    >
                        <Marker
                            draggable
                            coordinate={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                            }}
                            title="fullname"
                            description="hey i'm here!"
                        />
                    </MapView>

                    <Fab
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('ChatList')}
                    >
                        <Icon name="people" type="Ionicons" />
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