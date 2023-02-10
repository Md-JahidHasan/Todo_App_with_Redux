import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector((state)=>state.todoReducer);
    const filter = useSelector((state)=>state.filterReducer);


    const filterTodoByKey = (todo) => {
        const filterKey = filter.filterKey;
        switch (filterKey) {
            case 'Complete':
                return todo.completed;

            case 'Incomplete':
                return !todo.completed;

            default: return true;
        }
    }

    const filterTodoByColor = (todo) => {
        const colors = filter.colorSelected;
        if (colors.length > 0) {
            return colors.includes(todo?.color)
        }
        return true
    }
    // console.log(todos)
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            {
                todos
                .filter(filterTodoByKey)
                .filter(filterTodoByColor)
                .map(todo=><Todo
                todo={todo}
                key={todo.id}
                ></Todo>)
            }
            
        </div>
    );
};

export default TodoList;