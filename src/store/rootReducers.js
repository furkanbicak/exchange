import {combineReducers} from 'redux'

const initialState={
    accesToken:'',
}

const initialUserState={
    arr:[],
}

function rootReducer(state=initialState, action){
    switch(action.type){
            case 'SET_TOKEN':
                return{
                        accesToken:action.payload,
                    }
            default:
                return state
    }
}

function userReducer(state=initialUserState, action){
    switch(action.type){
            case 'SET_ARR':
                return{
                        ...state,
                        arr:action.payload,
                    }
            default:
                return state
    }
}

const reducer = combineReducers({
    accesToken:rootReducer,
    arr:userReducer
})

export default reducer