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
                [action.payload.which]: [...state[action.payload.which], {
                    id: state[action.payload.which].length > 0 ? state[action.payload.which][state[action.payload.which].length - 1].id + 1 : 0,
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
            const cloneTodo = stateTodo.map((item) => {
                if (item.id === action.payload.newItem.id) {
                    return action.payload.newItem;
                } else {
                    return item;
                }
            });
            return {
                ...state,
                [action.payload.wrapper]: cloneTodo,
            };
        case 'MOVE_ITEM':
            let nextWrapper = null;
            const cloneWrap = [...state[action.payload.cont]];
            const currantEl = cloneWrap.filter((item) => {
                if (item.id === Number(action.payload.num)) {
                    return item;
                }
            });
            const newArray = cloneWrap.filter((item) => {
                if (item.id !== Number(action.payload.num)) {
                    return item;
                }
            });
            if (action.payload.cont === 'todo') {
                nextWrapper = 'doing';
            }
            if (action.payload.cont === 'doing') {
                nextWrapper = 'done';
            }
            if (action.payload.cont === 'done') {
                nextWrapper = 'todo';
            }
            if (action.payload.cont === 'delete') {
                nextWrapper = 'todo';
            }
            currantEl[0].id = state[nextWrapper].length > 0 ? state[nextWrapper][state[nextWrapper].length - 1]. id + 1 : 0;
            return {
                ...state,
                [action.payload.cont]: [...newArray],
                [nextWrapper]: [...state[nextWrapper], ...currantEl]
            };
        case 'DELETE':
            const cloneWrapForDel = [...state[action.payload.cont]];
            const currantElForDel = cloneWrapForDel.filter((item) => {
                if (item.id === Number(action.payload.num)) {
                    return item;
                }
            });
            const newArrayForWrap = cloneWrapForDel.filter((item) => {
                if (item.id !== Number(action.payload.num)) {
                    return item;
                }
            });
            currantElForDel[0].id = state.delete.length > 0 ? state.delete[state.delete.length - 1]. id + 1 : 0;
            return {
                ...state,
                [action.payload.cont]: [...newArrayForWrap],
                delete: [...state.delete, ...currantElForDel]
            };
        default:
            return state;
    }
}

export default reducer;