import React, { useState, useEffect } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos([
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: false },
    ]);
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
