import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import TaskDetail from '../organisms/TaskDetail';
import Title from '../atoms/Title';
import CreateTaskButton from '../molecules/task/CreateTaskButton';
import TaskCard from '../organisms/TaskCard';

interface Task {
  id: string;
  title: string;
  description: string;
  category_id: string;
  due_date: string;
}
interface Category {
  id: string;
  name: string;
}

export default function TaskCategoryList() {
  //カテゴリーIDを受け取る
  const location = useLocation();
  const [state, setState] = useState(false);
  const dismiss = () => setState((prevState) => prevState && false);
  type IdState = { message: string };
  const idstate = location.state as IdState;
  const categoryId = idstate.message;

  const [categories, setCategories] = useState<Category[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });
  //カテゴリーの取得
  useEffect(() => {
    fetchCategories();
  }, []);

  const [categoryName, setCategoryName] = useState('');
  const fetchCategories = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await http.get('/api/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data.categories);
      if (categories.length > 0) {
        const firstCategory = categories[0];
        setCategoryName(firstCategory.name);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(categoryName);

  //カテゴリーで絞ったタスクの取得
  useEffect(() => {
    fetchTasks();
  }, []);
  const [userId, setUserId] = useState<string | null>('');

  const fetchTasks = async () => {
    setUserId(localStorage.getItem('user_id'));
    try {
      const response = await http.get('/api/categorytask', {
        headers: {
          category_id: categoryId,
        },
      });
      setTasks(response.data.tasks);
      console.log(response.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedTask, setSelectedTask] = useState<Task | null>();

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid
          item
          xs={7}
          md={7}
          sx={{
            borderRight: '2px solid #F8EFEF',
            height: 'calc(100vh - 64px)',
          }}
        >
          <Box sx={{ marginTop: '50px' }}>
            {categoryId ? (
              <Title
                title={
                  categories.find((category) => category.id === categoryId)
                    ?.name
                }
              />
            ) : (
              <Title title={'全て'} />
            )}
            <CreateTaskButton userId={userId} fetchTasks={fetchTasks} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <TaskCard tasks={tasks} setSelectedTask={setSelectedTask} />
            </Box>
          </Box>
        </Grid>
        {selectedTask && (
          <Grid item xs={5} md={5} sx={{ justifyContent: 'center' }}>
            <TaskDetail task={selectedTask} categoryName={categoryName} />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}
