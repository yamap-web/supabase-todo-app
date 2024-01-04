import React from 'react';
import { TodoItem } from '../../utils/interface';
import { deleteTodoItem, getAllTodoItems } from '../../utils/supabaseFunctions';

type Props = {
  todoItems: TodoItem[];
  setTodoItems: any;
};

const TodoList = ({ todoItems, setTodoItems }: Props) => {
  const handleDelete = async (id: number) => {
    await deleteTodoItem(id);
    const todoItems = await getAllTodoItems();

    setTodoItems(todoItems);
  };

  return (
    <div>
      <ul className='mx-auto'>
        {todoItems.map((todoItem) => (
          <div
            key={todoItem.id}
            className='flex bg-orange-200 rounded-md my-2 p-2 justify-between'
          >
            <li className='font-medium'>✅ {todoItem.title}</li>
            <span
              className='cursor-pointer'
              onClick={() => handleDelete(todoItem.id)}
            >
              ×
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
