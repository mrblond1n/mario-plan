import { ADD_PROJECT, CREATE_ERROR } from "../../constants/types"

export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('projects').add({
    ...project,
    authorFirstName: 'Mya',
    authorLastName: 'Sen',
    authorId: 12332,
    createAt: new Date()
  }).then(() => dispatch({ type: ADD_PROJECT, project }))
    .catch(error => dispatch({ type: CREATE_ERROR, error }))
}