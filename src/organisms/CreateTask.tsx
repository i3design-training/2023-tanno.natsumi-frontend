import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Title from '../molecules/createtask/Title';
import SelectCategory from '../molecules/createtask/SelectCategory';
import SelectDoeDate from '../molecules/createtask/SelectDoeDate';
import TaskDetail from '../molecules/createtask/InputTaskDescription';

interface CreateTaskProps {
  onClose: () => void;
  userId?: string | null;
  categoryID?: string;
  fetchTasks: () => void;
}
export default function CreateTask({
  onClose,
  fetchTasks,
  userId,
  categoryID,
}: CreateTaskProps) {
  //タイトルを格納
  const [taskTitle, setTaskTitle] = useState<string>('');
  //カテゴリの選択
  const [category, setCategory] = useState<string>(categoryID || '');
  //期限を格納
  const [deadline, setDeadline] = useState<Date | null>(null);
  //タスク詳細を格納
  const [taskDetail, setTaskDetail] = useState<string>('');

  const taskData = {
    title: taskTitle,
    user_id: userId,
    category_id: category,
    description: taskDetail,
    due_date: deadline,
  };
  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });
  const createTask = async () => {
    try {
      const response = await http.post('/api/task', taskData);
      console.log(response.data);
      onClose();
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          marginTop: '32px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '660px',
          height: '750px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
          borderRadius: '16px',
        }}
      >
        <Box>
          <Typography sx={{ fontSize: '20px', marginTop: '50px' }}>
            タスク作成
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              Maxwidth: '600px',
              marginTop: '50px',
              justifyContent: 'space-between',
            }}
          >
            <Title setTaskTitle={setTaskTitle} />
            <SelectCategory setCategory={setCategory} category={category} />
            <SelectDoeDate setDeadline={setDeadline} deadline={deadline} />
            <TaskDetail setTaskDetail={setTaskDetail} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ width: '120px', marginTop: '50px', alignItems: 'center' }}
          >
            <Button variant="contained" color="secondary" onClick={createTask}>
              作成
            </Button>
            <Button onClick={onClose}>キャンセル</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
