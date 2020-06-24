import { LOGIN_FAILED, LOGIN_SUCCESS } from "../../constants/types";

const INITIAL_STATE = {
  authError: null
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_FAILED:
      console.log('login failed');

      return { ...state, authError: 'Login failed' };
    case LOGIN_SUCCESS:
      return { ...state, authError: null }
    default:
      return state
  }
}

export default authReducer