import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface TitleProps {
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
}
export default function InputTaskTitle({ setTaskTitle }: TitleProps) {
  const handleChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };
  return (
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
  );
}
