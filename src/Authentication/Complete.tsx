import { Box, TextField, Typography } from '@mui/material';

const CompleteL = () => {
  return (
    <>
      <Typography>ログイン</Typography>
      <Box>
        <Typography>メールアドレス</Typography>
        <TextField></TextField>
      </Box>
      <Box>
        <Typography>パスワード</Typography>
        <TextField></TextField>
      </Box>
    </>
  );
};

export default CompleteL;
