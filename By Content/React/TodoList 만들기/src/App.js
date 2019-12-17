import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트',
      checked: true,
    },
    {
      id: 2,
      text: 'vue',
      checked: true,
    },
    {
      id: 3,
      text: 'react',
      checked: false,
    },
  ])
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
};

export default App;