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
  }
});

export default styles;