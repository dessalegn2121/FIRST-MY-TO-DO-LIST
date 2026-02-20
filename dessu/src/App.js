import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Counters
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="app">
      <div className="todo-card">
        <h1 className="title">DESSU To-Do List</h1>

        {/* Input and Add button */}
        <div className="input-section">
          <input
            type="text"
            className="task-input"
            placeholder="Enter a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <button className="add-btn" onClick={addTask}>
            Add Task
          </button>
        </div>

        {/* Task counters */}
        <div className="counters">
          <span>Total: {totalTasks}</span>
          <span>Completed: {completedTasks}</span>
        </div>

        {/* Task list */}
        <ul className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">No tasks available</p>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                <span className="task-text">{task.text}</span>
                <div className="task-actions">
                  <button
                    className="complete-btn"
                    onClick={() => toggleComplete(task.id)}
                  >
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;