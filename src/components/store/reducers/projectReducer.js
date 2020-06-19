import { ADD_PROJECT, CREATE_ERROR } from "../../constants/types";

const INITIAL_STATE = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
  ]
}

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      console.log('project adding: ', action.project);
      return state
    case CREATE_ERROR:
      console.log('error adding: ', action.error);
      return state
    default:
      return state
  }
}

export default projectReducer