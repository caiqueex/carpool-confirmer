import { StyleSheet, PixelRatio } from 'react-native';

const textScale = ( 1 / PixelRatio.get() ) + 1;

export default StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30 * textScale,
        width: '45%',
        elevation: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        shadowOffset: { width: 1.5, height: 1.5 },
        shadowOpacity: 0.7,
        shadowColor: 'gray',
    },
    buttonText: {
        color: 'black',
    },
});