import { LOGIN_SUCCESS, LOGIN_FAILED, SIGNOUT_SUCCESS, SIGNOUT_FAILED } from "../../constants/types";

export const signIn = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => dispatch({ type: LOGIN_SUCCESS }))
      .catch(error => dispatch({ type: LOGIN_FAILED, error }))
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => dispatch({ type: SIGNOUT_SUCCESS }))
      .catch(error => dispatch({ type: SIGNOUT_FAILED, error }))
  }
}