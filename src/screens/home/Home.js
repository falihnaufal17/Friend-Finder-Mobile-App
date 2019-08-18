import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { Fab, Icon } from 'native-base'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

export default class Home extends Component {
    render() {
        return (
            <>
                <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        showsMyLocationButton={true}
                        showsIndoorLevelPicker={true}
                        style={styles.map}
                        initialRegion={{
                            latitude: -7.7586432,
                            longitude: 110.3781322,
                            latitudeDelta: 0.0022,
                            longitudeDelta: 0.0021,
                        }}
                    >
                        <Marker
                            draggable
                            coordinate={{
                                latitude: -7.7586432,
                                longitude: 110.3781322,
                            }}
                            title="fullname"
                            description="hey i'm here!"
                        />
                    </MapView>
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