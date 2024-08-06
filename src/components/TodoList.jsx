import React, {useRef, useState, useEffect} from 'react'
import todo_icon from "../assets/todo_icon.svg"
import TodoItems from './TodoItems'

const TodoList = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos")? 
    JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();
    const addTodo = () =>{
        const inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }
        
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }
        setTodoList((prev) => [...prev, newTodo])
        inputRef.current.value = "";
    }

    const deleteTodo = (id) =>{
        setTodoList((prevTodo) =>{
           return prevTodo.filter((todoList) => todoList.id !== id)
        })
    }

    const toggle = (id) =>{
        setTodoList((prevTodo) =>{
            return prevTodo.map((todoList) =>{
                if(todoList.id === id){
                    return {...todoList, isComplete: !todoList.isComplete}
                }
                return todoList
            })
        })
    }
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] 
    rounded-xl  bg-white/25 backdrop-blur-2xl border-white/40'> 
        
        <div className='flex items-center justify-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="Todo icon"/>
            <h1 className="text-3xl font-semibold text-white text-center">TO-DO LIST</h1>
        </div>

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className="bg-transparent border-0 outline-none placeholder-slate-600
            flex-1 h-14 pl-6 pr-2" type="text" placeholder='Add To-do' />
            <button onClick={addTodo} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white
             text-lg font-medium cursor-pointer'>ADD</button>
        </div>

        <div>
            {todoList.map((item, index) =>{
                return <TodoItems key={index} text={item.text} id={item.id}
                isComplete={item.isComplete} deleteTodo={deleteTodo}
                toggle={toggle}/>
            })}
        </div>
    </div>
  )
}

export default TodoList