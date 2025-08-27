import React, { useState } from "react";
import Mappedtododata from "./mappedtododata";


const Datacomponent = ({
  activeButton,
  setActiveButton,
  input,
  setInput,
  todoList,
  setTodoList,
}) => {
  const handleForm = (e) => {
    e.preventDefault();
    const newTodo = {
      id:Date.now(),
      todo: input,
      completed: false
    };
    const updatedTodo = [...todoList, newTodo];
    setTodoList(updatedTodo);
    setInput("")
  };
  const [newUpdateTodo, setNewUpdateTodo] = useState('')
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl py-8">Todolist</h1>
      <form onSubmit={handleForm} className="py-5 ">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="bg-white outline-none w-[300px] flex-1 p-1 rounded-tl rounded-bl"
        />
        <button className="bg-cyan-200 px-1 rounded-br rounded-tr">AddTask</button>
      </form>
      <div className="space-x-2">
        <button
          onClick={() => setActiveButton(true)}
          className={`py-1 px-3 ${activeButton ? "bg-green-500" : ""}`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveButton(false)}
          className={`py-1 px-3 ${!activeButton ? "bg-red-500" : ""}`}
        >
          Completed
        </button>
      </div>

    <Mappedtododata todoList={todoList} setTodoList={setTodoList} newUpdateTodo={newUpdateTodo} setNewUpdateTodo={setNewUpdateTodo}/>
    </div>
  );
};

export default Datacomponent;
