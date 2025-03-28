import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Content = ({ 
  todo, 
  todos, 
  showFinished, 
  handleAdd, 
  handleChange, 
  handleCheckbox, 
  handleEdit, 
  handleDelete, 
  toggleFinished 
}) => {
  return (
    <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[38%] drop-shadow-2xl shadow-gray-500">
      <h1 className='font-bold text-center text-3xl text-slate-900 drop-shadow-lg tracking-wide bg-gradient-to-r from-violet-700 via-purple-500 to-violet-700 text-transparent bg-clip-text'>
        Listify - Manage Your Tasks
      </h1>

      <div className="add-todo my-5 p-4 bg-grey-400 rounded-lg shadow-lg border border-violet-200">
        <h2 className='text-lg font-bold text-violet-800 mb-3'>Add a Todo</h2>
        <div className="flex items-center">
          <input 
            onChange={handleChange} 
            onKeyDown={(e) => {
              if (e.key === 'Enter' && todo.length > 3) {
                handleAdd();
              }
            }} 
            value={todo} 
            type="text"  
            placeholder="Enter your task..." 
            className='w-4/5 rounded-full mx-2 py-2 px-4 border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-700 shadow-sm transition-all duration-300' 
          />
          <button 
            onClick={handleAdd} 
            disabled={todo.length <= 3} 
            className={`p-4 py-2 font-bold text-white rounded-full mx-6 transition-colors duration-300
              ${todo.length > 3 ? 'bg-violet-800 hover:bg-violet-900' : 'bg-gray-400 cursor-not-allowed'}`}>
            Save
          </button>
        </div>
      </div>

      <div className='flex justify-end my-4'>
        <input className='cursor-pointer' id='show' type="checkbox" onChange={toggleFinished} checked={showFinished} />
        <label htmlFor="show" className='mx-2 font-semibold text-violet-700 hover:text-violet-900 transition-colors duration-300'>
          Show Finished
        </label>
      </div>

      <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>

      <h2 className='text-2xl font-bold text-violet-800 mb-3 text-center bg-gradient-to-r from-violet-600 via-purple-400 to-violet-600 text-transparent bg-clip-text drop-shadow-lg'>Your Todo's</h2>
      <div className="todos">
        {todos.length === 0 && <div className='m-5 text-gray-500 flex justify-center '>No Todos Found</div>}
        {todos.map(item => {
          return (showFinished || !item.isCompleted) && (
            <div key={item.id} className="todo flex justify-between my-3">
              <div className='flex gap-5'>
                <input onChange={handleCheckbox} type="checkbox" name={item.id} checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : "text-gray-800"}>{item.todo}</div>
              </div>

              <div className="button flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className='font-bold text-white rounded-md mx-1 bg-violet-800 hover:bg-violet-950 p-2 py-1 transition-transform transform hover:scale-105'>
                  <FaEdit />
                </button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-red-600 hover:bg-red-800 p-2 py-1 font-bold text-white rounded-md mx-1 transition-transform transform hover:scale-105'>
                  <MdDelete />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;

