import {
  AUTH_ERROR,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  SET_AUTH_TOKEN,
} from "../actions/auth";

const initialState = {
  id: null, // "5f2aa35d43ea5564f76bd73f", //"5f297175fe118d52b6b9c948" //the user obj response from server
  error: null,
  loading: false,
  username: "",
  authToken: null, // authToken !== null does not mean it has been validated
  firstname: "",
};

export default function authReducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken,
    });
  } else if (action.type === CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: null,
      id: null,
      username: "",
      firstname: "",
    });
  } else if (action.type === AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  } else if (action.type === AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      id: action.currentUser.id,
      authToken: action.authToken,
      username: action.currentUser.username,
    });
  } else if (action.type === AUTH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    });
  }

  return state;
}
