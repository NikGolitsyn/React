import React from 'react';
import Main from './Main';
import Alert from './alert/Alert';
import AlertProvider from './alert/AlertContext';

const App = () => (
    <AlertProvider>
      <div>
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );

export default App;
