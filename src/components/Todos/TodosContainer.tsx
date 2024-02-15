import { useEffect, useState } from "react";
import TodoField from "./TodoField";
import TodoList from "./TodoList";

export default function TodosContainer() {
  const initialTodos: { id: string; title: string; isFinished: boolean }[] = [];
  const [todos, setTodos] = useState(initialTodos);

  function createTodo(title: string) {
    if (title != "") {
      const todo = {
        id: self.crypto.randomUUID(),
        title,
        isFinished: false,
      };

      const nextTodos = [...todos, todo];

      setTodos(nextTodos);
    }
  }

  function editTodo(id: string, title: string) {
    if (title != "") {
      const nextTodos: { id: string; title: string; isFinished: boolean }[] =
        todos.map((todo) => {
          if (todo.id === id) {
            todo.title = title;
          }
          return todo;
        });
      setTodos(nextTodos);
    }
  }

  function deleteTodo(id: string) {
    const nextTodos: { id: string; title: string; isFinished: boolean }[] =
      todos.filter((todo) => todo.id !== id);

    setTodos(nextTodos);
  }

  function changeTodoStatus(id: string) {
    const nextTodos: { id: string; title: string; isFinished: boolean }[] =
      todos.map((todo) => {
        if (todo.id === id) {
          if (todo.isFinished) todo.isFinished = false;
          else todo.isFinished = true;
        }
        return todo;
      });

    setTodos(nextTodos);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <TodoField createTodo={createTodo} />
      <TodoList
        todos={todos}
        handleCheckboxChange={changeTodoStatus}
        handleEditTodo={editTodo}
        handleDeleteTodo={deleteTodo}
      />
    </div>
  );
}
