import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import SendingURL from './Authentication/SendingURL';
import ProfileDetail from './pages/ProfileDetails';
import Complete from './Authentication/Complete';
import Category from './pages/Category';
import TaskCategoryList from './pages/TaskCategoryList';
import TaskList from './pages/TaskList';

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
