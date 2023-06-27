//import { Reducer } from "redux";

export interface User {
    id: number;
    name: string;
    email: string;
}

interface UserState {
    content: null | User[] | User;
    error: string | null;
    loading: boolean;
}


interface AddUserAction {
    type: 'ADD_USER';
    payload: User;
}

interface RemoveUserAction {
    type: 'REMOVE_USER';
    payload: number;
}

interface SetContentAction {
    type: 'SET_CONTENT';
    payload: string;
}

interface SetErrorAction {
    type: 'SET_ERROR';
    payload: string | null;
}

interface SetLoadingAction {
    type: 'SET_LOADING';
    //payload: boolean;
}

type UserAction = AddUserAction | RemoveUserAction | SetContentAction | SetErrorAction | SetLoadingAction;

const initialState: UserState = {
    content: null,
    error: null,
    loading: false,
};

const userReducer = (state = initialState, action: UserAction) : UserState => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                content: Array.isArray(state.content)
                    ? [...state.content, action.payload]
                    : action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        case 'SET_LOADING' :
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default userReducer;