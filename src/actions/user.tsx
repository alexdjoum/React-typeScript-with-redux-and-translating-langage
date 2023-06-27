import {User} from '../reducers/userReducer';
import {ActionTypes} from "../constants/actions-types";
import {Member} from "../users";
export const addUser = (user: User) => ({
    type: "ADD_USER",
    payload: user
});

export interface FetchAllMembersLoadingAction {
    type: typeof ActionTypes.FETCH_ALL_MEMBERS_LOADING;

}
export const fetchAllMembersLoading = (): FetchAllMembersLoadingAction => ({
    type: ActionTypes.FETCH_ALL_MEMBERS_LOADING,

})

export const authenticationSuccess = (user: User) => ({
    type: ActionTypes.AUTHENTICATION,
    payload: user
})
export const fetchAllMembers = (members: Member[]) => ({
    type: ActionTypes.FETCH_ALL_MEMBERS_SUCCESS,
    payload: members
})
export const authenticationError = (error: string) => ({
    type: ActionTypes.AUTHENTICATION_ERROR,
    payload: error
})