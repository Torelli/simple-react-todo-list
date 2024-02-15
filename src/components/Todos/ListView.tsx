import React, { useState } from "react";

export default function ListView({
  todos,
  handleCheckboxChange,
  handleEditTodo,
  handleDeleteTodo,
}: {
  todos: { id: string; title: string; isFinished: boolean }[];
  handleCheckboxChange: (id: string) => void;
  handleEditTodo: (id: string, title: string) => void;
  handleDeleteTodo: (id: string) => void;
}) {
  const [editButton, setEditButton] = useState({ id: "", isClicked: false });

  const listItems: React.ReactNode = todos.map((todo) => (
    <li
      className="flex items-center justify-between px-8 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl"
      key={todo.id}
    >
      <div className="flex items-center gap-2">
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.isFinished ? true : false}
          className="w-6 h-6 accent-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() => {
            handleCheckboxChange(todo.id);
          }}
        />
        {editButton.id === todo.id && editButton.isClicked ? (
          <>
            <input
              autoFocus
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  handleEditTodo(todo.id, (e.target as HTMLInputElement).value);
                  setEditButton({ id: "", isClicked: false });
                }
                if (e.code === "Escape")
                  setEditButton({ id: "", isClicked: false });
              }}
              className="px-4 py-2 border border-gray-200 dark:border-gray-200/5 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-3xl hover:bg-gray-50 hover:drop-shadow-md transition-all cursor-pointer focus-visible:outline-0 focus-visible:border-indigo-700 dark:focus-visible:border-indigo-700 peer"
              placeholder="Edit todo"
              defaultValue={todo.title}
              type="text"
            />
            <label
              className="opacity-0 mt-2 peer-focus-visible:opacity-100 py-1 text-sm text-gray-900 dark:text-gray-400 transition-all"
              htmlFor="inputTodo"
            >
              Press{" "}
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                Enter
              </kbd>{" "}
              to save!
            </label>
          </>
        ) : (
          <label
            htmlFor={todo.id}
            className="cursor-pointer px-4 py-2 select-none"
          >
            {todo.title}
          </label>
        )}
      </div>
      <div className="flex items-center gap-4">
        <button
          className="hover:text-gray-500 dark:hover:text-gray-100 transition-all"
          onClick={() => {
            setEditButton({ id: todo.id, isClicked: true });
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
          className="hover:text-gray-500 dark:hover:text-gray-100 transition-all"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  ));

  return (
    <ul className="h-[60vh] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll p-8 flex flex-col gap-8 border border-gray-200 dark:border-gray-700 dark:text-gray-400 rounded-2xl">
      {listItems}
    </ul>
  );
}
