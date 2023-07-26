import { Typography } from '@mui/material';
import { Box } from '@mui/system';

interface TaskDescriptionProps {
  label: string;
  value: string | undefined;
}

export function TaskDescription({ label, value }: TaskDescriptionProps) {
  return (
    <Box sx={{ display: 'flex', marginTop: '20px' }}>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ flex: '0 0 100px' }}
      >
        {label}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ flex: '1 1 auto', marginLeft: '16px' }}
      >
        {value}
      </Typography>
    </Box>
  );
}
