import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actionCloseModal, actionEditTask } from '../../actions/actions';
import './modal.css';

const Modal = () => {
    const dispatch = useDispatch();
    const isEdit = useSelector((state) => state.isEdit);
    const isView = useSelector((state) => state.isView);
    const currentTask = useSelector((state) => state.currentTask);
    const index = currentTask[0];
    const wrapper = currentTask[1];
    const task = useSelector((state) => {
        return state[wrapper].filter((item) => {
            if (Number(index) === item.id) {
                return item;
            }
        });
    });
    const [ title, setTitle ] = useState(task[0].title);
    const [ description, setDescription ] = useState(task[0].discription);
    const closeModal = (e) => {
        e.preventDefault();
        setTitle('');
        setDescription('');
        dispatch(actionCloseModal());
    };
    const editTask = (e) => {
        e.preventDefault();
        dispatch(actionEditTask({wrapper: wrapper, num: index, newItem: {id: task[0].id, title: title, discription: description}}));
        setTitle('');
        setDescription('');
        dispatch(actionCloseModal());
    };
    return (
        
        <div className="modal-wrapper">
            <div className="modal">
                {
                    isView && !isEdit &&
                    <div className='modal-content'>
                        <p >title: <span id="modal-title">{title}</span></p>
                        <p>description: <span id="modal-description"> {description}</span></p>
                    </div>
                }
                {
                    !isView && isEdit &&
                    <form action="" className="edit-form" onSubmit={(e) => editTask(e)}>
                        <label htmlFor="edit-form__title"> Edit title</label>
                        <input type="text" id="edit-form__title" name="editName" placeholder="edit the title for this card" onChange={(e) => setTitle(e.target.value)} value={title} />
                        <label htmlFor="edit-form__description"> Edit description</label>
                        <textarea id="edit-form__description" name="editName" onChange={(e) => setDescription(e.target.value)} value={description} placeholder="edit the description for this card"></textarea>
                        <input type="submit" name="edit" value="edit" id="edit-form__submit" />
                    </form>
                }
                <a href="" className='modal-close' onClick={closeModal}><i className='icon-close' onClick={(e) => closeModal(e)}></i></a>
            </div>
	    </div>
    );
};

export default Modal;