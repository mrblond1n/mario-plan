import { ADD_PROJECT, CREATE_ERROR } from "../../constants/types";

const INITIAL_STATE = {
  projects: []
}

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return state
    case CREATE_ERROR:
      return state
    default:
      return state
  }
}

export default projectReducer