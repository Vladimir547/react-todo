import React from 'react';
import { useDispatch } from 'react-redux';

import { actionShowMadal, actionShowModalEdit, actionShowModalView, actionSetTask, actionMoveItem, actionDeleteTask } from '../../actions/actions';
import './ListItem.css';

const ListItem = (props) => {
    const dispatch = useDispatch();
    const deleted = props.whichState !== 'delete';
    const wrapper =  props.whichState;
    const editTask = (e) => {
        dispatch(actionSetTask(e.target.closest('.task').dataset.id, wrapper));
        dispatch(actionShowMadal());
        dispatch(actionShowModalEdit());
    };
    const showTask = (e) => {
        dispatch(actionSetTask(e.target.closest('.task').dataset.id, wrapper));
        dispatch(actionShowMadal());
        dispatch(actionShowModalView());
    };
    const moveItem = (e) => {
        dispatch(actionMoveItem( wrapper, e.target.closest('.task').dataset.id ));
    };
    const deleteTask = (e) => {
        dispatch(actionDeleteTask( wrapper, e.target.closest('.task').dataset.id ));
    };
    return (
        <div className="task" data-id={props.itemText.id}>
            <p className="title-text">{props.itemText.title} {props.itemText.id}</p>
            <p className="hide">{props.itemText.discription}</p>
            <div className="task__icons">
                <i className="icon-view-show" onClick={ (e) => showTask(e) }></i>
                <i className="icon-point-right" onClick={(e) => moveItem(e)}></i>
                <i className="icon-pencil" onClick={ (e) => editTask(e) }></i>
                {
                    deleted && <i className="icon-close" onClick={ (e) => deleteTask(e) }></i>
                }
            </div>
        </div>
    );
};

export default ListItem;