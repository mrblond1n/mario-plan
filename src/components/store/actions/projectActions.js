import { ADD_PROJECT } from "../../constants/types"

export const createProject = (project) => dispatch => dispatch({ type: ADD_PROJECT, project })