
import {ActionTypes} from "../constants/actions-types";
export interface Member {
    id: number;
    who: string;
    name: string;
    firstname: string;
    Description: string;
    email: string;
    image: string;
    phone: number;
    // Ajoutez d'autres propriétés de l'utilisateur selon vos besoins
}
interface MemberState {
    content: null | Member[];
    error: string | null;
    loading: boolean;
}
interface FetchMembersAction {
    type: "FETCH_ALL_MEMBERS_SUCCESS";
    payload: null | Member[];
}

interface FetchMembersLoadingAction {
    type: "FETCH_ALL_MEMBERS_LOADING";
}

interface FetchMembersErrorAction {
    type: "FETCH_ALL_MEMBERS_ERROR";
    payload: string | null;
}


type MemberAction = FetchMembersAction | FetchMembersLoadingAction | FetchMembersErrorAction ;

const initialState: MemberState = {
    content: null,
    error: null,
    loading: false,
};
const membersReducer = (state = initialState, action: MemberAction) : MemberState => {
    switch (action.type) {
        case "FETCH_ALL_MEMBERS_SUCCESS":
            return {
                ...state,
                content: action.payload
            };
        case "FETCH_ALL_MEMBERS_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        case ActionTypes.FETCH_ALL_MEMBERS_LOADING :
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default membersReducer;