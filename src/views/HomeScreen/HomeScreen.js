import React, {useState, useEffect} from 'react';
import { Text, View, Dimensions, Alert } from 'react-native';
import styles from './style';
import Button from '../../components/Button';
import Geolocation from '@react-native-community/geolocation';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from "react-native-qrcode-scanner";
import { format } from "date-fns";
import { pt } from 'date-fns/locale'
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps'

export default HomeScreenView = (props) => {

  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const [clickedButton, setClickedButton] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [latLong, setLatLong] = useState('');
  const [myLatLong, setMyLatLong] = useState({});
  const [infosReaded, setInfosReaded] = useState({});
  const [showReader, setShowReader] = useState(false);
  const [infoVerified, setInfoVerified] = useState({});

  const handleClickedButton = async (buttonIndex) => {
    setClickedButton(buttonIndex)

    if(buttonIndex === 2){
      setShowReader(true);
      setShowMap(false);

      Geolocation.getCurrentPosition(info => {
        setMyLatLong({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        })
      });
    }
  };

  useEffect(() => {

    const formattedDate = format(new Date(), "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {locale: pt});

    Geolocation.getCurrentPosition(info => {
      setLatLong(JSON.stringify({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        data: formattedDate
      }))
    });
  });

  const shareLocation = async () => {
    Alert.alert(
        'Localização',
        'Localização compartilhada, escaneie o QR Code pelo celular do Caroneiro para validar.',
        [
          {text: 'OK'},
        ],
        {cancelable: false},
      );
  };

  const onSuccess = (e) => {
    setShowReader(false);
    setShowMap(true)
    setInfosReaded(JSON.parse(e.data))
  }

  const onMapLayout = () => {
    console.log('dfdff')
  }

  const verify = () => {
    console.log(infoVerified)
    Alert.alert(
      'Distância verificada',
      `Você está a ${infoVerified.distancia} km e a ${infoVerified.duracao.toFixed(1)} minutos de distância do motorista.`,
      [
        {text: 'OK'},
      ],
      {cancelable: false},
    );
  }

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
          {clickedButton === 2 && showReader && 
          <QRCodeScanner
            onRead={onSuccess}
            showMarker={true}
            checkAndroid6Permissions={true}
            bottomContent={
              <View>
                <Text style={styles.centerText}>Leia o QR code do motorista.</Text>
                </View>
            }
          />
          }

          {clickedButton === 2 && showMap &&
          <View style={{flex: 1, width:'100%', height: 500, alignItems: 'center'}}>
          <MapView
          initialRegion={{
            latitude: myLatLong.latitude,
            longitude: myLatLong.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.mapa}
          onLayout={onMapLayout}>
          
          <MapView.Marker coordinate={{latitude: myLatLong.latitude, longitude: myLatLong.longitude}} />
          <MapView.Marker coordinate={{latitude: infosReaded.latitude, longitude: infosReaded.longitude}} />
                    
          {true &&
            <MapViewDirections
            onStart={(params) => {
              console.log(`Started routing between ${params.origin} and ${params.destination}`);
            }}
            onReady={(result) => {
              console.log(result)
              setInfoVerified({distancia: result.distance, duracao: result.duration});
            }}
            onError={(errorMessage) => {
              console.log({latitude: infosReaded.latitude, longitude: infosReaded.longitude});
            }}
              origin={{latitude: myLatLong.latitude, longitude: myLatLong.longitude}}
              destination={{latitude: infosReaded.latitude, longitude: infosReaded.longitude}}
              strokeWidth={3}
              strokeColor='hotpink'
              apikey={'AIzaSyCRAHuYfUo2sDQnEyKupt_09r8N32nT8B4'}
            />
          }
        </MapView>

        <Button title='Compartilhar localização' style={{backgroundColor: '#00BFFF', width: 200, top: 30}} onPress={() => verify()} />
      </View>

      }

        </View>
    );
}