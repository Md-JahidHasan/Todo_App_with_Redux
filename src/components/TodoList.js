import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector((state)=>state.todoReducer)
    // console.log(todos)
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            {
                todos.map(todo=><Todo
                todo={todo}
                key={todo.id}
                ></Todo>)
            }
            
        </div>
    );
};

export default TodoList;