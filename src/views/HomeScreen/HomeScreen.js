import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import Button from '../../components/Button'

export default HomeScreenView = (props) => {


  const handleSignInButton = async () => {

};

    return (
        <View style={styles.container}>
          <Text style={styles.textValidarCarona}>Validar carona</Text>

        <View style={styles.buttonContainer}>
        <Button title='Motorista' onPress={handleSignInButton} />
        <Button title='Caroneiro' onPress={handleSignInButton}/>
        </View>
        </View>
    );
}