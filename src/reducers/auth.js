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
  let answer;
  if (action.type === SET_AUTH_TOKEN) {
    answer = Object.assign({}, state, {
      authToken: action.authToken,
    });
    // console.log("SET_AUTH_TOKEN", action, answer);
    return answer;
  } else if (action.type === CLEAR_AUTH) {
    answer = Object.assign({}, state, {
      authToken: null,
      id: null,
    });
    // console.log("CLEAR_AUTH", action, answer);
    return answer;
  } else if (action.type === AUTH_REQUEST) {
    answer = Object.assign({}, state, {
      loading: true,
      error: null,
    });
    // console.log("AUTH_REQUEST", action, answer);
    return answer;
  } else if (action.type === AUTH_SUCCESS) {
    answer = Object.assign({}, state, {
      loading: false,
      id: action.currentUser.id,
      authToken: action.authToken,
      username: action.currentUser.username,
    });
    // console.log("AUTH_SUCCESS", action, answer);
    return answer;
  } else if (action.type === AUTH_ERROR) {
    answer = Object.assign({}, state, {
      loading: false,
      error: action.error,
    });
    // console.log("AUTH_ERROR", action, answer);
    return answer;
  }

  return state;
}
