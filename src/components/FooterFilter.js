import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colourChanged, filterKeyChange } from '../redux/filters/actions';

const FooterFilter = () => {
    const todos = useSelector((state)=>state.todoReducer);
    const filter = useSelector((state)=>state.filterReducer);
    const {colorSelected, filterKey} = filter;
    console.log(filter)


    const dispatch = useDispatch();

    const handleFIlterKey = (filterKey) =>{
        dispatch(filterKeyChange(filterKey))
    }

    const handleFilterColor = (color) =>{
        if(colorSelected.includes(color)){
            dispatch(colourChanged(color, 'removed'))
        }else{
            dispatch(colourChanged(color, 'added'))
        }
    }


    const remainingTodo = todos.filter(todo=>!todo.completed).length
    const remainingTask = (number) =>{
        switch(number){
            case 0:
                return `No task`

            case 1:
                return `1 task`

            default:
                return `${number} tasks`
        }
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{remainingTask(remainingTodo)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${ filterKey === "All" && 'font-bold' }`} onClick={()=>handleFIlterKey('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${filterKey === "Incomplete" && 'font-bold'}`} onClick={() => handleFIlterKey('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${filterKey === "Complete" && 'font-bold'}`} onClick={() => handleFIlterKey('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li
                    onClick={()=>handleFilterColor('green')}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colorSelected.includes('green') && 'bg-green-500'}`}
                ></li>
                <li
                    onClick={() => handleFilterColor('red')}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colorSelected.includes('red') && 'bg-red-500'}`}
                ></li>
                <li
                    onClick={() => handleFilterColor('yellow')}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colorSelected.includes('yellow') && 'bg-yellow-500'}`}
                ></li>
            </ul>
        </div>
    );
};

export default FooterFilter;