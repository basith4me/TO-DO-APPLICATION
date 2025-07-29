import axios from "axios";
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = async (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return; //avoid empty input
    try {
      const response = await axios.post("/api/todos", { text: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo("");
    } catch (error) {
      console.log("error adding todo", error);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">
          <h1 className="text-4xl font-bold">Task Manager</h1>
          <form
            onSubmit={addTodo}
            action=""
            className="flex items-center gap-2 shadow-sm border border-gray-200 p-2 rounded-lg mt-2"
          >
            <input
              type="text"
              className="flex-1 outline-none px-3 py-2 text-gray-700 placeholder-gray-400"
              required
              placeholder="what want to do..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-md py-2 font-medium"
              type="submit"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
