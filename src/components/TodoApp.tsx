'use client';

import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import { getAllTodoItems, addTodoItem } from '../../utils/supabaseFunctions';

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState<any>([]);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    const getTodoItems = async () => {
      const todoItems = await getAllTodoItems();
      setTodoItems(todoItems);
    };
    getTodoItems();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title) return;

    // todoの追加
    await addTodoItem(title);
    const todoItems = await getAllTodoItems();
    setTodoItems(todoItems);

    setTitle('');
  };

  return (
    <section className='text-center mb-2 text-2xl font-medium'>
      <h3>Supabase Todo App</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className='shadow-lg p-1 outline-none mr-2'
          type='text'
          name='todo'
          value={title}
        />
        <button className='shadow-md border-2 px-1 py-1 rounded-lg bg-green-200'>
          Add
        </button>
      </form>
      <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
    </section>
  );
};

export default TodoApp;
