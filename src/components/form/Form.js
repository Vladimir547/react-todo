import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAdd } from '../../actions/actions';

import './Form.css';


const Form = (props) => {
    const dispatch = useDispatch();
    const todosName = props.whichState;
    const todo = useSelector((state) => state);
    const [ todoTitle, setTodoTitle ] = useState('');
    const [ todoDescription, setTodoDescription ] = useState('');
    const closeForm = (e) => {
        setTodoTitle('');
        setTodoDescription('');
        props.showForm(e);
    };
    const addTask = (e) => {
        props.showForm(e);
        console.log(todo);
        dispatch(actionAdd({ discription: todoDescription, title: todoTitle, which: todosName}));
        setTodoTitle('');
        setTodoDescription('');
    }
    return (
        <form action="" className={`todo__form ${props.formClass}`} data-status="todo" onSubmit={(e) => {addTask(e)}}>
            <input type="text" className="form__title" onChange={(e) => setTodoTitle(e.target.value)} value={todoTitle} placeholder="enter the title for this card" />
            <textarea name="description" className="form__description" onChange={(e) => setTodoDescription(e.target.value)} value={todoDescription} placeholder="enter the description for this card"></textarea>
            <div className='submit__align'>
                <input type="submit" className="form__submit" name="sub" value="Add card" />
                <i className='icon-close form__close' onClick={(e) => closeForm(e)}></i>
            </div>
        </form>
    );
}

export default Form;