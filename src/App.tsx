import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  message: string
}

const App = ({ message }: AppProps) => {
  return (
    <div>
      {message}
    </div>
  );
}

export default App;
