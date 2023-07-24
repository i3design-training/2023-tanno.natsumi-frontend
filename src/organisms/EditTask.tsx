import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface EditTaskProps {
  onClose: () => void;
}

export default function EditTask({ onClose }: EditTaskProps) {

  //タイトルを格納
  const [taskTitle, setTaskTitle] = useState<string>('');
  const handleChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  //カテゴリの選択
  //データベースから取ってきたデータをこの配列に入れたい。
  const categoruList: string[] = ['仕事', 'プライベート', '今年中'];
  const [category, setCategory] = useState<string>('');
  const handleChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  //期限を格納
  const [deadline, setDeadline] = useState<Date | null>(null);
  const handleChangeDeadline = (date: Date | null) => {
    setDeadline(date);
  };
  console.log(deadline);

  //タスク詳細を格納
  const [taskDetail, setTaskDetail] = useState<string>('');
  const handleChangeTaskDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDetail(e.target.value);
  };
  console.log(taskDetail);

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
          <Typography sx={{ fontSize: '20px', marginTop: '20px' }}>
            タスクを編集
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
          <Box sx={{ width: '500px', marginTop: '10px' }}>
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
                placeholder="select category..."
                displayEmpty
                value={category}
                onChange={handleChange}
                style={{
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '170%',
                }}
              >
                {categoruList.map((category) => (
                  <MenuItem
                    key={category}
                    value={category}
                    sx={{
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '170%',
                    }}
                  >
                    {category}
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
            <Button color="secondary">編集</Button>
            <Button onClick={onClose}>キャンセル</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
