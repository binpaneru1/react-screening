import React from 'react';
import Application from './components/Application'
import {Provider} from 'react-redux';
import { store } from './helpers/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
     <div className="App">
      <Application />
    </div>
  </Provider>
  );
}

export default App;
