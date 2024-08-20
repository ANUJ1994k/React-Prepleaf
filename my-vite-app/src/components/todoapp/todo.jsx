
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;

    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a task"
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button 
        onClick={handleAddTodo} 
        style={{ padding: '8px ', marginLeft: '8px', fontSize: '16px' }}>
        Add Todo
      </button>
      <ol style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li 
            key={index} 
            style={{ marginBottom: '10px', fontSize: '18px' }}>
            {todo} 
            <button 
              onClick={() => handleRemoveTodo(index)} 
              style={{ marginLeft: '10px', color: 'red', fontSize: '14px' }}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoApp;
