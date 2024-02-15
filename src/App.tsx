import { useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import TodosContainer from "./components/Todos/TodosContainer";

function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div className="pt-36 bg-white text-gray-900 dark:text-white dark:bg-gray-900 min-h-screen font-sans">
      <Navbar title="Simple React Todo List" />
      <TodosContainer />
    </div>
  );
}

export default App;
