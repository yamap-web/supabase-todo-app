import { supabase } from './supabase';

export const getAllTodoItems = async () => {
  const todoItems = await supabase.from('todo').select('*');
  return todoItems.data;
};

export const addTodoItem = async (title: string) => {
  await supabase.from('todo').insert({ title: title });
};

export const deleteTodoItem = async (id: number) => {
  await supabase.from('todo').delete().eq('id', id);
};
