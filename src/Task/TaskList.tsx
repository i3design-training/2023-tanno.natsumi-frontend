import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Modal,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateTask from '../Task/CreateTask';
import Layout from '../layout/Layout';
import TaskDtail from '../Task/taskDetail';

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

export default function TaskList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

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

  //モーダルの開閉
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const [selectedTask, setSelectedTask] = useState<Task | null>();

  const handleCardClick = (task: Task) => {
    setSelectedTask(task);
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
            <Button
              variant="contained"
              color="secondary"
              sx={{ ml: 'auto' }}
              onClick={handleOpenModal}
            >
              タスクを追加する
            </Button>
            <Modal open={open}>
              <Box
                sx={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <CreateTask
                  onClose={handleCloseModal}
                  userId={userId}
                  fetchTasks={fetchTasks}
                />
              </Box>
            </Modal>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {tasks.map((task, index) => (
                // カードを押したら、task_idでtaskDtailが開くようにする
                <Card
                  onClick={() => handleCardClick(task)}
                  key={index}
                  sx={{
                    marginTop: '50px',
                    minWidth: '500px',

                    background: '#FFF',
                    borderBottom: '2px solid #EFD5C3',
                    boxShadow: 'none',
                    '&:hover': {
                      background: '#F2DDCF',
                    },
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center',
                          paddingLeft: '8px',
                        }}
                      >
                        {task.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {task.due_date}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Box>
        </Grid>
        {selectedTask && (
          <Grid item xs={5} md={5} sx={{ justifyContent: 'center' }}>
            <TaskDtail task={selectedTask} />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}
