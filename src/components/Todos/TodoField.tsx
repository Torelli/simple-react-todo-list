export default function TodoField({createTodo} : {createTodo: (title: string) => void}) {
  
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.code === "Enter") {
      createTodo((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).value = '';
    }
  }

  return (
    <>
      <input
        onKeyDown={handleKeyDown}
        className="px-4 py-2 w-1/3 border border-gray-200 dark:border-gray-200/5 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-3xl hover:bg-gray-50 hover:drop-shadow-md transition-all cursor-pointer focus-visible:outline-0 focus-visible:border-indigo-700 dark:focus-visible:border-indigo-700 peer"
        placeholder="Create todo"
        type="text"
        name="inputTodo"
        id="inputTodo"
      />
      <label
        className="opacity-0 mt-2 peer-focus-visible:opacity-100 py-1 text-sm text-gray-900 dark:text-gray-400 transition-all"
        htmlFor="inputTodo"
      >
        Press{" "}
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          Enter
        </kbd>{" "}
        to create!
      </label>
    </>
  );
}
