import React from 'react';
import './App.css';
import DishList from './components/DishList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dishes Dashboard</h1>
      </header>
      <DishList />
    </div>
  );
}

export default App;

