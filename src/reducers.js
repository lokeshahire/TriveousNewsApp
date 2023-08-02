import { combineReducers } from "redux";

// Reducer for authentication state
const initialAuthState = {
  user: null, // You can modify this based on your user authentication state
};

const authReducer = (state = initialAuthState, action) => {
  // Implement your authentication related actions and state changes here
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// Reducer for news-related state
const initialNewsState = {
  favorites: [], // Array to store favorite news article IDs
};

const newsReducer = (state = initialNewsState, action) => {
  // Implement your news-related actions and state changes here
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

// Combine all reducers into the root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
});

export default rootReducer;
