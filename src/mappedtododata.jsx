import React, { useState } from "react";
import Deleteicon from "./iconscomponent/Deleteicon";
import Editicon from "./iconscomponent/Editicon";
import Updateicons from "./iconscomponent/updateicons";
import Openedit from "./Openedit";

const Mappedtododata = ({ todoList, setTodoList,newUpdateTodo, setNewUpdateTodo, updatedTodo }) => {
  const [editComponent, setEditComponent] = useState(null)
  
  const handleDelete = (id) => {
    const deleteTodo = todoList.filter((data) => {
      return data.id !== id;
    });
    setTodoList(deleteTodo);
  };
  const handleId=(id)=>{
    setEditComponent(id)
  }


  const cancelUpdate=()=>{
    setEditComponent(null)
  }

  console.log(editComponent)

  const handleUpdateTodo = (id)=>{
   const updatedlist = todoList.map((todo)=>{
    return todo.id === id ? {...todo, todo: newUpdateTodo} : todo
   })
   setTodoList(updatedlist)
   setEditComponent('')
  }
//  const example = [
//   {id:1,todo:2 },
//   {id:2,todo:4 },
//   {id:3,todo:6 }
//  

//  const updatedexample= example.map(data=>{
//   return {...data, todo:data.todo * 5}
  
//  })

const datar = {id:1, number: 200}
const newData = {...datar, number:20}


console.log(newData)
  return (
    <div>
      {todoList.map((data) => (
        <div
          key={data.id}
          className="my-1 px-2  text-center flex justify-between"
        >
          {data.id === editComponent ? <Openedit data={data} cancelUpdate={cancelUpdate} newUpdateTodo={newUpdateTodo} setNewUpdateTodo={setNewUpdateTodo} handleUpdateTodo={handleUpdateTodo} /> : 
          <>
         
            <h2 className="bg-purple-600 w-[200px]">{data.todo}</h2>
      
          <div className="flex">
            <Deleteicon handleDelete={() => handleDelete(data.id)} />
            <Editicon handleId={handleId} id={data.id}/>
            <Updateicons />
          </div>
          </>}

        </div>
      ))}
    
    </div>
  );
};

export default Mappedtododata;
