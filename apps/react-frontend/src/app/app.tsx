import { Todo } from '@task-manager-monorepo/data';
import { Todos } from '@task-manager-monorepo/ui';
import { useEffect, useState } from 'react';

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/todos');
        const todos = await res.json();
        setTodos(todos);
      } catch (e: any) {
        console.error(e.message);
      }
    })();
  }, []);

  const addTodo = async () => {
    try {
      const res = await fetch('/api/addTodo', { method: 'POST', body: '' });
      const newTodo = await res.json();
      setTodos([...todos, newTodo]);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <button id="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
}

export default App;
