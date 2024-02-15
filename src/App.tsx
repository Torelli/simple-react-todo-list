import { Navbar } from "./components/Navbar/Navbar";
import TodosContainer from "./components/Todos/TodosContainer";

function App() {
  return (
    <div className="pt-36 bg-white text-gray-900 dark:text-white dark:bg-gray-900 min-h-screen font-sans">
      <Navbar title="Simple React Todo List" />
      <TodosContainer />
    </div>
  );
}

export default App;
