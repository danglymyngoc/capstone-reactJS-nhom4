import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeLayout from "./layout/HomeLayout/HomeLayout";
import HomePage from "./page/HomePage/HomePage";
import DetailPage from "./page/DetailPage/DetailPage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import LoginPage from "./page/LoginPage/LoginPage";
import BookingPage from "./page/BookingPage/BookingPage";
import UserProfile from "./page/UserProfile/UserProfile";
import DetailLayout from "./layout/DetailLayout/DetailLayout";
import BookingLayout from "./layout/BookingLayout/BookingLayout";
import UserProfileLayout from "./layout/UserProfileLayout/UserProfileLayout";
import Spinner from "./component/Spinner/Spinner";
import Admin from "./Admin/Admin";
import AddFilm from "./Admin/component_admin/BodyAdmin/body_components/AddFilm/AddFilm";
import EditFilm from "./Admin/component_admin/BodyAdmin/body_components/EditFilm/EditFilm";
import Shedule from "./Admin/component_admin/BodyAdmin/body_components/Shedule/Shedule";
function App() {
  return (
    <BrowserRouter>
      <Spinner />

      {/* MOVIE */}
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/detail/:idFilm" element={<DetailLayout />}>
          <Route path="/detail/:idFilm" element={<DetailPage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ticket-room/:maLichChieu" element={<BookingLayout />}>
          <Route path="/ticket-room/:maLichChieu" element={<BookingPage />} />
        </Route>
        <Route path="/user-profile" element={<UserProfileLayout />}>
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
      </Routes>

      {/* ADMIN */}
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/admin/films/addnew" element={<AddFilm />} />
        <Route path="/admin/films/edit/:id" element={<EditFilm />} />
        <Route path="/admin/films/shedule/:id" element={<Shedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
