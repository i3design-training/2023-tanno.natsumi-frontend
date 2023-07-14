import {
  Box,
  Button,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import Layout from '../layout/Layout';
import { useState } from 'react';
import EditTask from './EditTask';

interface Task {
  id: string;
  title: string;
  description: string;
  category_id: string;
  due_date: string;
}

type TaskDetailProps = {
  task: Task;
};

export default function TaskDtail({ task }: TaskDetailProps) {
  //モーダルの開閉
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          color="primary"
          sx={{
            marginTop: '50px',
            width: 445,
            background: '#FFF',
            padding: '16px',
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {task.title}
          </Typography>
          <Box sx={{ display: 'flex', marginTop: '20px' }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ flex: '0 0 100px' }}
            >
              期日
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ flex: '1 1 auto', marginLeft: '16px' }}
            >
              {task.due_date}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', marginTop: '20px' }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ flex: '0 0 100px' }}
            >
              カテゴリ
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ flex: '1 1 auto', marginLeft: '16px' }}
            >
              {task.category_id}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', marginTop: '20px' }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ flex: '0 0 100px' }}
            >
              詳細
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ flex: '1 1 auto', marginLeft: '16px' }}
            >
              {task.description}
            </Typography>
          </Box>
        </Paper>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Box sx={{ width: '130px' }}>
            <Button
              onClick={handleOpenModal}
              variant="contained"
              color="secondary"
              sx={{ marginBottom: '8px' }}
            >
              編集する
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
                <EditTask onClose={handleCloseModal} />
              </Box>
            </Modal>
            <Button color="error">削除</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
