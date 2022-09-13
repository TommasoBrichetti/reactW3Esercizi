import { LOG_IN, LOG_OUT } from "../actions"

const initialState = {  
    userLogged: '',
}

const userReducer = ( state = initialState, action) => {

    switch (action.type) {

        case LOG_IN:
            return{
                ...state,
                userLogged: action.payload,
            }
            case LOG_OUT:
                return{
                    ...state,
                    userLogged: '',
                }
        default: return state;
    }
}
export default userReducer