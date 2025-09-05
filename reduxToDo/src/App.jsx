import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container" style={{ maxWidth: "600px" }}>
        {/* Heading */}
        <h1 className="text-center text-success mb-4">
          Learn Redux Toolkit - Todo App
        </h1>

        {/* Add Todo Form */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <AddTodo />
          </div>
        </div>

        {/* Todo List */}
        <div className="card shadow-sm">
          <div className="card-body">
            <Todos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
