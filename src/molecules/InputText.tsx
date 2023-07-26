import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface InputTextProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}
export default function InputText({ setText, label }: InputTextProps) {
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ flex: '0 0 100px' }}
      >
        {label}
      </Typography>
      <TextField
        variant="standard"
        sx={{ width: '400px' }}
        onChange={handleChangeText}
      />
    </Box>
  );
}
