import React from 'react';
import { Button, Image, View } from 'react-native';
import { Permissions, ImagePicker } from 'expo';

export default class CameraRoll extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Open Photos' onPress={this.pickFromGallery} />
        {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
      </View>
    );
  }

  pickFromGallery = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);

    if (status === 'granted') {
      this.pickImage();
    }

    console.log(permissions, status);
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
