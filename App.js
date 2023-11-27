/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { View, Text } from 'react-native';
 import AppNavigator from './src/navigation/AppNavigator';
 import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/lib/integration/react';
 import {reduxStore, persistor} from './src/redux/store';
  
  const App = () => {
  
    return (
     <Provider store={reduxStore}>
       <PersistGate loading={<View><Text></Text></View>} persistor={persistor}>
         <AppNavigator 
           screenProps={{}} 
         />
       </PersistGate>
     </Provider>
    )
  }
  
  export default App;
  