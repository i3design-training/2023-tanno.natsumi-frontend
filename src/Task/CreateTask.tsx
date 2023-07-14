import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';

interface Category {
  id: string;
  name: string;
}

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
  const handleChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  //カテゴリの選択
  // カテゴリIDの初期値を空文字列に設定
  const [category, setCategory] = useState<string>(categoryID || '');
  const handleChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  //期限を格納
  const [deadline, setDeadline] = useState<Date | null>(null);
  const handleChangeDeadline = (date: Date | null) => {
    setDeadline(date);
  };

  //タスク詳細を格納
  const [taskDetail, setTaskDetail] = useState<string>('');
  const handleChangeTaskDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDetail(e.target.value);
  };

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

  useEffect(() => {
    fetchCategories();
  }, []);

  //メニューにカテゴリの名前を入れるため
  const [categories, setCategories] = useState<Category[]>([]);
  const fetchCategories = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await http.get('/api/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Box sx={{ width: '600px', marginTop: '50px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '14px', alignItems: 'center' }}>
                タイトル
              </Typography>
              <TextField
                variant="standard"
                sx={{ width: '400px' }}
                onChange={handleChangeTaskTitle}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '50px',
              }}
            >
              <Typography sx={{ fontSize: '14px', alignItems: 'center' }}>
                カテゴリ
              </Typography>
              <Select
                placeholder={'select category...'}
                displayEmpty
                value={category}
                onChange={handleChange}
                style={{
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '170%',
                }}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category.id}
                    value={category.id}
                    defaultValue={category.id}
                    sx={{
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '170%',
                    }}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '50px',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>期限</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={deadline} onChange={handleChangeDeadline} />
              </LocalizationProvider>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '50px',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>タスク詳細</Typography>
              <TextField
                multiline
                rows={4}
                placeholder="タスクの詳細を記入してください"
                variant="standard"
                sx={{ width: '400px' }}
                onChange={handleChangeTaskDetail}
              />
            </Box>
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
