import { StyleSheet, PixelRatio } from 'react-native';

const textScale = ( 1 / PixelRatio.get() ) + 1;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textValidarCarona: {
  fontSize: 40
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50
  }
});

export default styles;