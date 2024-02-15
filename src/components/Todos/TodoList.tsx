import { useEffect, useState } from "react";
import ListView from "./ListView";

export default function TodoList({
  todos, handleCheckboxChange, handleEditTodo, handleDeleteTodo
}: {
  todos: { id: string; title: string; isFinished: boolean }[], handleCheckboxChange: (id: string) => void, handleEditTodo: (id: string, title:string) => void, handleDeleteTodo: (id: string) => void
}) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState(selectedTab === 0
    ? todos.filter((todo) => !todo.isFinished)
    : todos.filter((todo) => todo.isFinished));

    useEffect(() => {
        setFilteredTodos(selectedTab === 0
            ? todos.filter((todo) => !todo.isFinished)
            : todos.filter((todo) => todo.isFinished));
    },[selectedTab, todos])
    

  return (
    <div className="mt-11 w-3/4">
      <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-center text-gray-500">
        <li className="me-2">
          <a
            onClick={() => setSelectedTab(0)}
            href="#"
            aria-current="page"
            className={`inline-block p-4 ${
              selectedTab == 0
                ? "text-indigo-600 dark:text-indigo-500 bg-gray-100 active dark:bg-gray-800"
                : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }   rounded-t-lg transition-all`}
          >
            Pending
          </a>
        </li>
        <li className="me-2">
          <a
            onClick={() => setSelectedTab(1)}
            href="#"
            className={`inline-block p-4 ${
              selectedTab == 1
                ? "text-indigo-600 dark:text-indigo-500 bg-gray-100 active dark:bg-gray-800"
                : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            }   rounded-t-lg transition-all`}
          >
            Finished
          </a>
        </li>
      </ul>
      {filteredTodos.length == 0 ? (
        <div className="min-h-[60vh] p-8 flex flex-col items-center justify-center gap-8 border border-gray-200 dark:border-gray-700 dark:text-gray-400 rounded-2xl">
          <i className="text-9xl fa-solid fa-leaf"></i>
          <h2 className="text-4xl">Looks like there's nothing here...</h2>
        </div>
      ) : (
        <ListView todos={filteredTodos} handleCheckboxChange={handleCheckboxChange} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}/>
      )}
    </div>
  );
}
