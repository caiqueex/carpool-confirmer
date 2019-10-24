import React, {useState, useEffect} from 'react';
import { Text, View, Image, Alert } from 'react-native';
import styles from './style';
import Button from '../../components/Button';
import Geolocation from '@react-native-community/geolocation';
import QRCode from 'react-native-qrcode-svg';
import { RNCamera } from 'react-native-camera';


export default HomeScreenView = (props) => {

  const [clickedButton, setClickedButton] = useState(0);
  const [latLong, setLatLong] = useState('');

  const handleClickedButton = async (buttonIndex) => {
    setClickedButton(buttonIndex)
    if(buttonIndex === 1) {
      await Geolocation.getCurrentPosition(info => setLatLong(`Latitude: info.coords.latitude Longitude: info.coords.longitude`));
    }
    console.log(latLong)
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => setLatLong(`Latitude: info.coords.latitude Longitude: info.coords.longitude`));
});


  const shareLocation = async () => {
    Alert.alert(
        'Localização',
        'Localização compartilhada, escaneio o QR Code pelo celular do Caroneiro',
        [
          {text: 'OK'},
        ],
        {cancelable: false},
      );
  };

    return (
        <View style={styles.container}>
          <Text style={styles.textValidarCarona}>Validar carona</Text>
          <View style={styles.buttonContainer}>
            <Button title='Motorista' style={ clickedButton === 1 && {backgroundColor: 'red'}} onPress={() => handleClickedButton(1)} />
            <Button title='Caroneiro' style={ clickedButton === 2 && {backgroundColor: 'red'}} onPress={() => handleClickedButton(2)}/>
          </View>
          {clickedButton === 1 &&
            <View style={styles.qrCode}>

                <QRCode
                    value={latLong}
                    size={250}
                    color="black"
                    backgroundColor="white"
                    logoSize={30}
                    logoMargin={2}
                    logoBorderRadius={15}
                />
              <View style={{    flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                <Button title='Compartilhar Localização' style={{backgroundColor: '#98fb98', width: 200, top: 30}} onPress={() => shareLocation()} />
              </View>
            </View>
          }
          {clickedButton === 2 && 
        <RNCamera
        ref={camera => { this.camera = camera }}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      />}
        </View>
    );
}