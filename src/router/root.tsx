import { createBrowserRouter } from "react-router-dom";
import JoinPage from "../pages/auth/JoinPage";
import LoginPage from "../pages/auth/LoginPage";
import Main from "../pages/home/Main";
import ProfilePage from "../pages/edit/ProfilePage";

const root = createBrowserRouter([
  {
    path: 'signup',
    element: <JoinPage/>
  },
  {
    path: 'login',
    element: <LoginPage/>
  },
  {
    path: '',
    element: <Main/>
  },
  {
    path: 'profile',
    element: <ProfilePage/>
  }
]);

export default root;