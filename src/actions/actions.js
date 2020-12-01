const actionTypes = {
    ADD: 'ADD',
    SHOW_MODAL: 'SHOW_MODAL', 
    EDIT_MODAL: 'EDIT_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    VIEW_TASK: 'VIEW_TASK',
    SET_TASK: 'SET_TASK',
};

export function actionAdd ( obj ) {
    return {
        type: actionTypes.ADD,
        payload: obj
    }
}

export function actionShowMadal () {
    return {
        type: actionTypes.SHOW_MODAL,
    };
}
export function actionShowModalEdit () {
    return {
        type: actionTypes.EDIT_MODAL,
    };
}
export function actionShowModalView () {
    return {
        type: actionTypes.VIEW_TASK,
    };
}
export function actionCloseModal () {
    return {
        type: actionTypes.CLOSE_MODAL
    };
}
export function actionSetTask ( num, name ) {
    return {
        type: actionTypes.SET_TASK,
        payload: [num, name]
    };
}

export default actionTypes;
