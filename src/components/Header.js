import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import doubleClickImg from '../assets/image/double-tick.png';
import notesImg from '../assets/image/notes.png';
import plusImg from '../assets/image/plus.png'
import { clearCompleted, markAsAllCompleted, todoAdd } from '../redux/todos/actions';

const Header = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const handleInput =(e)=>{
        setInput(e.target.value)
        console.log(input)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(input.length>0){
            dispatch(todoAdd(input));
        }else{
            alert('Please add todo name!')
        }
        
        setInput('')
    }

    const handleCompleteAll = ()=>{
        dispatch(markAsAllCompleted())
    }

    const handleClearCompleted = ()=>{
        dispatch(clearCompleted())
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img
                    src={notesImg}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    value={input}
                    onChange={handleInput}
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                className="flex space-x-1 cursor-pointer"
                onClick={handleCompleteAll}
                >
                    <img
                        className="w-4 h-4"
                        src={doubleClickImg}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li
                onClick={handleClearCompleted}
                className="cursor-pointer"
                >Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;