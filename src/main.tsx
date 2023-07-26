import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileDetail from './pages/ProfileDetails';
import Category from './pages/Category';
import TaskCategoryList from './pages/TaskCategoryList';
import TaskList from './pages/TaskList';
import Login from './pages/Authentication/Login';
import Registration from './pages/Authentication/Registration';
import SendingURL from './pages/Authentication/SendingURL';
import Complete from './pages/Authentication/Complete';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/sendingurl" element={<SendingURL />} />
      <Route path="/profiledetail" element={<ProfileDetail />} />
      <Route path="/user/register" element={<Complete />} />
      <Route path="/category" element={<Category />} />
      <Route path="/categorytask" element={<TaskCategoryList />} />
      <Route path="/tasklist" element={<TaskList />} />
    </Routes>
  </BrowserRouter>,
);
