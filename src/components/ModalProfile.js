import React, { Component } from 'react'
import { Text, View, Image, Button } from 'react-native'
import Modal from "react-native-modal"

export default class ModalProfile extends Component {
    render() {
        return (
            <Modal isVisible={this.props.isVisible} animationIn='tada' animationInTiming={1000} animationOut='fadeOutDown'
                animationOutTiming={800} backdropOpacity={0.2}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 0,
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    width: 300,
                    elevation: 10
                }} >
                    <Image
                        source={{ uri: this.props.avatar }}
                        style={{
                            width: '100%',
                            height: 150,
                        }}
                        resizeMode='center'
                    />
                    <Text>{this.props.fullname}</Text>
                    <Button title="check profile" onPress={this.props.onClose} />
                </View>
            </Modal>
        )
    }
}
