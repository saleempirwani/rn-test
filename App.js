import React from 'react';
import {MainScreen} from './src/screens';
import {Provider} from 'react-redux';

import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
