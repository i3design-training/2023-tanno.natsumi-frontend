import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import SendingURL from './Authentication/SendingURL';
import CreateTask from './Task/CreateTask';
import ProfileDetail from './Profile/ProfileDetails';
import Complete from './Authentication/Complete';
import Category from './Category/Category';
import TaskCategoryList from './Category/TaskCategoryList';
import TaskList from './Task/TaskList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
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
