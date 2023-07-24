import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../layouts/Layout';
import CreateTaskButton from '../atoms/CreateTaskButton';
import TaskCard from '../organisms/TaskCard';
import TaskDetail from '../organisms/taskDetail';

interface Task {
  id: string;
  title: string;
  description: string;
  category_id: string;
  due_date: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>();
  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });

  //カテゴリーで絞ったタスクの取得
  useEffect(() => {
    fetchTasks();
  }, []);
  const [userId, setUserId] = useState<string | null>('');

  const fetchTasks = async () => {
    setUserId(localStorage.getItem('user_id'));
    const token = localStorage.getItem('token');
    try {
      const response = await http.get('/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data.tasks) {
        window.location.href = '/login';
        return;
      }
      setTasks(response.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

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
            <Typography
              variant="h4"
              sx={{ fontWeight: '700', display: 'flex' }}
            >
              全て
            </Typography>
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
            <TaskDetail task={selectedTask} />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}
