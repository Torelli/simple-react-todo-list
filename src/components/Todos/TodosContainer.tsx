import { useEffect, useState } from "react";
import TodoField from "./TodoField";
import TodoList from "./TodoList";

type Todo = {
  id: string;
  title: string;
  isFinished: boolean;
};

export default function TodosContainer() {
  const initialTodos:() => Todo[] = () => {
    return JSON.parse(localStorage.getItem("todos") || "[]") as Todo[];
  };
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
      const nextTodos: Todo[] =
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
    const nextTodos: Todo[] =
      todos.filter((todo) => todo.id !== id);

    setTodos(nextTodos);
  }

  function changeTodoStatus(id: string) {
    const nextTodos: Todo[] =
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
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const persistedTodos: Todo[] =
      JSON.parse(localStorage.getItem("todos") || "[]");
    if (persistedTodos.length > 0) setTodos(persistedTodos);
    console.log(localStorage.getItem("todos"));
  }, []);

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
