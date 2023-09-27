// src/components/Todo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/todoSlice';

const Todo = ({ id, title, description, status }) => {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleUpdate = () => {
    dispatch(updateTodo({ id, title: editedTitle, description: editedDescription }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex items-center mb-2">
      <div className="flex flex-col mr-2">
        <label>Title:</label>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="border p-1 mb-1"
        />
      </div>
      <div className="flex flex-col mr-2">
        <label>Description:</label>
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="border p-1 mb-1"
        />
      </div>
      <div className="flex flex-col mr-2">
        <label>Status:</label>
        <span>{status}</span>
      </div>
      <button onClick={handleUpdate} className="bg-blue-500 text-white px-2 py-1 mr-2">
        Update
      </button>
      < onClick={handleDelete} className="bg-red-500 text-white px-2 py-1"></
