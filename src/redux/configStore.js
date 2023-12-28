import thunk from "redux-thunk";
import bannerReducer from "./reducer/bannerReducer";
import listMovieReducer from "./reducer/listMovieReducer";
import tabMovieReducer from "./reducer/tabMovieReducer";
import footerReducer from "./reducer/footerReducer";
import detailReducer from "./reducer/detailReducer";
import bookingReducer from "./reducer/bookingReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import spinnerReducer from "./reducer/spinnerReducer";
import loginReducer from "./reducer/loginReducer";
import { userProfileReducer } from "./reducer/userProfleReducer";
import { QuanLyPhimReducer } from "./reducer/filmManageReducer";
const rootReducer = combineReducers({
  bannerReducer,
  listMovieReducer,
  tabMovieReducer,
  footerReducer,
  detailReducer,
  bookingReducer,
  spinnerReducer,
  loginReducer,
  userProfileReducer,
  QuanLyPhimReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
