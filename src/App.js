import React from 'react';
import routes from './routes';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import './App.css';

function App() {
  return (
    <div>
      < Header />
      {routes}
    </div>
  );
}

export default App;
