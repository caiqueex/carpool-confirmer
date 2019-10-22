import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';
import Button from '../../components/Button';
import Geolocation from '@react-native-community/geolocation';

export default HomeScreenView = (props) => {

  const [clickedButton, setClickedButton] = useState(0);
  const [latLong, setLatLong] = useState({});

  const handleClickedButton = async (buttonIndex) => {
    setClickedButton(buttonIndex)
    if(buttonIndex === 1) {
      await Geolocation.getCurrentPosition(info => setLatLong(info.coords));
    }
  };

  const shareLocation = async () => {

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
              <Image
                style={{width: 200, height: 200}}
                source={{uri: 'https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=lonlat:' + latLong.latitude +',' + latLong.longitude}}
              />
            <Button title='Compartilhar Localização' style={{backgroundColor: 'gray', width: 200, top: 30}} onPress={() => shareLocation()} />
            </View>

          }
        </View>
    );
}