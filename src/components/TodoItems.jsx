import React from 'react'
import tick from "../assets/tick.png"
import no_tick from "../assets/no_tick.png"
import delete_icon from "../assets/delete.svg"

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div  onClick={() => {toggle(id)}}
        className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : no_tick} alt="tick icon"  className='w-7'/>
            <p 
            className={`text-white ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : "" }`}>{text}</p>
        </div>
        <img src={delete_icon} alt="Delete Icon"  className='w-5 cursor-pointer' onClick={() => {deleteTodo(id)}}/>
    </div>
  )
}

export default TodoItems