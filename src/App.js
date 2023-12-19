
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './layout/HomeLayout/HomeLayout';
import HomePage from './page/HomePage/HomePage';
import DetailPage from './page/DetailPage/DetailPage';
import RegisterPage from './page/RegisterPage/RegisterPage';
import LoginPage from './page/LoginPage/LoginPage';
import BookingPage from './page/BookingPage/BookingPage';
import UserProfile from './page/UserProfile/UserProfile';
import DetailLayout from './layout/DetailLayout/DetailLayout';
import BookingLayout from './layout/BookingLayout/BookingLayout';
import UserProfileLayout from './layout/UserProfileLayout/UserProfileLayout';
import Spinner from './component/Spinner/Spinner';
import Admin from './Admin/Admin';
function App() {
  return (
    <BrowserRouter>
      <Spinner />

      {/* MOVIE */}
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='/detail/:idFilm' element={<DetailLayout />}>
          <Route path='/detail/:idFilm' element={<DetailPage />} />
        </Route>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/ticket-room/:maLichChieu' element={<BookingLayout />}>
          <Route path='/ticket-room/:maLichChieu' element={<BookingPage />} />
        </Route>
        <Route path='/user-profile' element={<UserProfileLayout />}>
          <Route path='/user-profile' element={<UserProfile />} />
        </Route>
      </Routes>

      {/* ADMIN */}
      <Routes>
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
