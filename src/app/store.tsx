import { configureStore } from '@reduxjs/toolkit'
//import UserReducer from '../reducers/userReducer';
import MembersReducer from "../reducers/membersReducer";


const store = configureStore({
    reducer:{

        members: MembersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;