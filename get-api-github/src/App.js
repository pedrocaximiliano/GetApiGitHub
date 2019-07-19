import React from 'react';
import './App.css';
import './styles.css';

import Routes from '../src/routes';
import Header from '../src/components/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes />
    </div>
  );
}

export default App;
