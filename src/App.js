import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do App</h1>
        <Todo text="This is a test to-do." />
      </header>
    </div>
  );
}

export default App;