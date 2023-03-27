import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  { text: 'Terminar curso de introducción a react', completed: false },
  { text: 'Leer libro de las 4 mil semanas', completed: false },
  { text: 'Tener reunión de equipo de desarrollo', completed: false },
];

function App() {
  return (
    <div className='bg-orange-100 flex flex-col justify-between items-center h-screen w-full p-2'>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App
