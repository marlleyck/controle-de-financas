import React from 'react';
import AuthProvider from './contexts/auth';

import Header from './components/Header';
import Main from './components/Main';

import './App.sass';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      
        <Header />

        <Main />
      
    </AuthProvider>
    </div>
  );
}

export default App;
