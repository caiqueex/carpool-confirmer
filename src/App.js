import React, {useEffect} from 'react';
import { View, StatusBar, UIManager } from 'react-native';
import { Root } from 'native-base'
import AppNavigator from './navigation/AppNavigator';

import SplashScreen from 'react-native-splash-screen';

export default App = () => {
  console.disableYellowBox = true;

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }, [])
  

  
  return(
    <View style={{ flex: 1 }}>
      <Root>
        <StatusBar hidden={false} backgroundColor="#07B5AC" />
          <AppNavigator />
      </Root> 
    </View>
  );

};