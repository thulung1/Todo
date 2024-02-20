import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todosString = localStorage.getItem("todos")
    if(todosString){
      let todos = JSON.parse(todosString)
      setTodos(todos)
    }
  }, [])

  const saveTodos = async() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  function handleAdd() {
    setTodos([...todos, { id: Date.now(), todo }]);
    setTodo("");
    saveTodos()
  }

  const  handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id!==id
    })
    setTodos(newTodos)
    saveTodos()
  }

  const handleEdit = (e, id) => {
   let t = todos.filter(i => i.id === id)
   setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id!==id
    })
    setTodos(newTodos)
    saveTodos()
  }

  return (
    <div className="mx-3 md:container md:mx-auto bg-violet-50 p-5 my-5 rounded-xl min-h-[85vh] md:w-1/2">
      <h1 className="font-bold text-center text-xl">iTask - Manage your todos at one place</h1>
      <div className="addTodo my-5">
        <h2 className="text-lg font-bold my-1">Add Todos</h2>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          className="w-full rounded-lg p-1 px-2"
        />
        <button
          onClick={handleAdd}
          className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm text-white rounded-md my-4 w-full"
        >
          Save
        </button>
      </div>

      <h2 className="text-lg font-bold">Your Todos</h2>
      {todos.length == 0 && <div>No Todos to display</div>}
      {todos.map((item) => {
        return (
          <div key={item.id} className="todos flex justify-between my-3">
            <div className="">
              {item.todo}
            </div>
            <div className="buttons flex h-full">
              <button
                onClick={(e) => handleEdit(e, item.id)}
                className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm text-white rounded-md mx-1"
              >
                <FaEdit />
              </button>
              <button
                onClick={(e) => {handleDelete(e, item.id)}}
                className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm text-white rounded-md mx-1"
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
