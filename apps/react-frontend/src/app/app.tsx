import { useEffect, useState } from 'react';

interface Todo {
  title: string;
}

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
      <ul>
        {todos.map((t) => (
          <li className="todo" key={t.title}>
            {t.title}
          </li>
        ))}
      </ul>
      <button id="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
}

export default App;
