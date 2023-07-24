import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface TaskDetailProps {
  setTaskDetail: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputTaskDescription({ setTaskDetail }: TaskDetailProps) {
  const handleChangeTaskDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDetail(e.target.value);
  };
  return (
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
  );
}
