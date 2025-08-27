import React from 'react'

const Openedit = ({cancelUpdate,data, newUpdateTodo, setNewUpdateTodo, handleUpdateTodo}) => {
  return (
    <div>
        <form className='items-center'>
            <input
            defaultValue={data.todo}
            onChange={(e)=> setNewUpdateTodo(e.target.value) }
             type="text" className='bg-white outline-none px-1'/>
            <button className='bg-green-500 mx-1 cursor-pointer px-1' onClick={()=>handleUpdateTodo(data.id) }>update</button>
            <button className='bg-red-500 cursor-pointer px-1'onClick={cancelUpdate}>cancel</button>
        </form>
    </div>
  )
}

export default Openedit