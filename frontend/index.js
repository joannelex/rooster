import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { provider } from 'react-redux';

import App from './App';
import React from 'react';

const RNRedux = () => { 
    <Provider>
        <App />
    </Provider>
}

appRegistry.registerRootComponent(appName, () => RNRedux);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
