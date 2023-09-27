// src/components/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      setNewTodo('');
    }
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-1 mr-2"
        />
        <button onClick={handleAddTodo} className="bg-green-500 text-white px-2 py-1">
          Add Todo
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
