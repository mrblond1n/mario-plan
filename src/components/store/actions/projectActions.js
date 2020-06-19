import { ADD_PROJECT } from "../../constants/types"

export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
  return dispatch({ type: ADD_PROJECT, project })
}