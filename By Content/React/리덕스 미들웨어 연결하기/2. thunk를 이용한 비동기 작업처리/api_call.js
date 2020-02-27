import * as api from '../lib/api'
import { handleActions } from 'redux-actions';
import createRequestThunk from '../lib/createRequestThunk';

const GET_POST = 'api_call/GET_POST';
const GET_POST_SUCCESS = 'api_call/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'api_call/GET_POST_FAILURE';

const GET_USERS = 'api_call/GET_USERS';
const GET_USERS_SUCCESS = 'api_call/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'api_call/GET_USERS_FAILURE';

// thunk

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
};

const api_call = handleActions(
    {
        [GET_POST]: 
            state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true // 요청 시작
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false // 요청 완료
            },
            post: action.payload
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false // 요청 완료
            }
        }),
        [GET_USERS] : state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: true // 요청 시작
            }
        }),
        [GET_USERS_SUCCESS] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false // 요청 완료
            },
            users: action.payload
        }),
        [GET_USERS_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false // 요청 완료
            }
        }),
    }, initialState
);

export default api_call;