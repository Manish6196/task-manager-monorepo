import { Todo } from '@task-manager-monorepo/data';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className="todo" key={t.title}>
          {t.title}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
