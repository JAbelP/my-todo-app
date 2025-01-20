import React from 'react';
import './App.css';
import TodoComponent from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do App</h1>
        <TodoComponent />
              </header>
    </div>
  );
}

export default App;