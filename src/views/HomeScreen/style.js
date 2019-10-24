import { StyleSheet, PixelRatio } from 'react-native';

const textScale = ( 1 / PixelRatio.get() ) + 1;


const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  textValidarCarona: {
  fontSize: 40
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50
  },
  qrCode: {
    top: 100,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  mapa: {
    width: '100%',
    height: 400,
    top: 140
  }
});

export default styles;