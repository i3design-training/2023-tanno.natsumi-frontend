import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface SelectDoeDateProps {
  setDeadline: React.Dispatch<React.SetStateAction<Date | null>>;
  deadline: Date | null;
}
export default function SelectDoeDate({
  setDeadline,
  deadline,
}: SelectDoeDateProps) {
  const handleChangeDeadline = (date: Date | null) => {
    setDeadline(date);
  };
  return (
    <>
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
    </>
  );
}
