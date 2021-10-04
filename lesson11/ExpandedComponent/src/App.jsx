import React from 'react';
import Expand from './Expand';

const App = () => (
  <div className="app">
    <Expand title="Let's the carnage begin!">
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    </Expand>
  </div>
);

export default App;
