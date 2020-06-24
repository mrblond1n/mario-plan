import { LOGIN_SUCCESS, LOGIN_FAILED } from "../../constants/types";

export const signIn = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => dispatch({ type: LOGIN_SUCCESS }))
      .catch(error => dispatch({ type: LOGIN_FAILED, error }))
  }
}