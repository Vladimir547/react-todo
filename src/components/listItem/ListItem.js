import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionShowMadal, actionShowModalEdit, actionShowModalView, actionSetTask, actionMoveItem } from '../../actions/actions';
import './ListItem.css';

const ListItem = (props) => {
    const isShow = useSelector((state) => state.isModalShow );
    const currentTask = useSelector((state) => state.currentTask );
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
    return (
        <div className="task" data-id={props.itemText.id}>
            <p className="title-text">{props.itemText.title} {props.itemText.id}</p>
            <p className="hide">{props.itemText.discription}</p>
            <div className="task__icons">
                <i className="icon-view-show" onClick={ (e) => showTask(e) }></i>
                <i className="icon-point-right" onClick={(e) => moveItem(e)}></i>
                <i className="icon-pencil" onClick={ (e) => editTask(e) }></i>
                {
                    deleted && <i className="icon-close"></i>
                }
            </div>
        </div>
    );
};

export default ListItem;