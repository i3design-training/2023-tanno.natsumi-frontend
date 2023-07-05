import { Box, Button, TextField, Typography } from '@mui/material';
import Layout from '../layout/Layout';

const TextFieldStyle = {
  display: 'flex',
  marginTop: '30px',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Registration = () => {
  return (
    <Layout>
      <Box
        sx={{
          marginTop: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '32px' }}>新規会員登録</Typography>
        <Box sx={{ width: '380px', marginTop: '10px' }}>
          <Box
            sx={{
              ...TextFieldStyle,
            }}
          >
            <Typography sx={{ fontSize: '14px', alignItems: 'center' }}>
              名前
            </Typography>
            <TextField sx={{ width: '200px' }} />
          </Box>
          <Box
            sx={{
              ...TextFieldStyle,
            }}
          >
            <Typography sx={{ fontSize: '14px', alignItems: 'center' }}>
              メールアドレス
            </Typography>
            <TextField sx={{ width: '200px' }} />
          </Box>
          <Box
            sx={{
              ...TextFieldStyle,
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>パスワード</Typography>
            <TextField sx={{ width: '200px' }} />
          </Box>
          <Box
            sx={{
              ...TextFieldStyle,
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>
              パスワード（確認用）
            </Typography>
            <TextField sx={{ width: '200px' }} />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: '130px', marginTop: '40px' }}
        >
          <Button variant="contained" color="secondary">
            登録する
          </Button>
          <Button>ログインはこちら</Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Registration;
