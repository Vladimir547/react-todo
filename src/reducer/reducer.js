const initialState = {
    todo:[],
    doing:[],
    done:[],
    delete:[],
    isModalShow: false,
    isEdit: false,
    isView: false,
    currentTask: []
};

function reducer ( state = initialState, action) {
    switch (action.type) {
        case 'ADD': 
            return {
                ...state,
                todo: [...state.todo, {
                    id: state.todo.length > 0 ? state.todo[state.todo.length - 1].id + 1 : 0,
                    title: action.payload.title,
                    discription: action.payload.discription
                }],
            };
        case 'SHOW_MODAL': 
            return {
                ...state,
                isModalShow: true,
            };
        case 'EDIT_MODAL': 
            return {
                ...state,
                isEdit: true,
            }
        case 'VIEW_TASK':
            return {
                ...state, 
                isView: true,
            };
        case 'CLOSE_MODAL':
            return {
                ...state, 
                isModalShow: false,
                isView: false,
                isEdit: false,
            };
        case 'SET_TASK':
            return {
                ...state,
                currentTask: [action.payload[0], action.payload[1]],
            };
        case 'EDIT':
                let stateTodo = state[action.payload.wrapper];
                const cloneTodo = [...stateTodo];
                cloneTodo.splice(action.payload.num, 1, action.payload.newItem);
                return {
                    ...state,
                    [action.payload.wrapper]: cloneTodo,
                };
        default:
            return state;
    }
}

export default reducer;