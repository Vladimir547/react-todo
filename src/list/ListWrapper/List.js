import React,{ useState } from 'react';
import { useSelector } from 'react-redux';

import Form from '../../components/form/Form';
import ListItem from '../../components/listItem/ListItem';
import './List.css';

const List = (props) => {
    const tasks = useSelector((state) => state[props.classProps]);
    const [ formClass, setFormClass ] = useState('todo__form-none');
    const [ todoAddClass, setTodoAddClass ] = useState('todo__add-show')
    const isntDelete = props.classProps !== 'delete';
    const showForm = (e) => {
        e.preventDefault();
        if (formClass === 'todo__form-none' && todoAddClass === 'todo__add-show') {
            setTodoAddClass('todo__add-none');
            setFormClass('todo__form-show');
        } else {
            setTodoAddClass('todo__add-show');
            setFormClass('todo__form-none')
        }
    }

    return (
        <div className="todo__wrapper">
            <div className="todo__title">
                <h3>{props.classProps}</h3>
            </div>
            <div className={`${props.classProps} tasks`}>
                {tasks.map((item, index) => {
                    return (
                        <ListItem key={`${index}${item.title}`} itemText={item} itemIndex={item.id} whichState ={props.classProps} />
                    );
                })}    
            </div>
                <Form formClass={formClass} showForm={(e) => showForm(e)} whichState={props.classProps} />

            {
                isntDelete &&
                <div className={todoAddClass}>
                    <a href="" className="add__btn" onClick={(e) => showForm(e)}><i className="icon-plus"></i> add card</a>
                </div>
            }

        </div>
    );
};

export default List;