import { Box, Button, TextField, Typography } from '@mui/material';
import Layout from '../layout/Layout';

const Login = () => {
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
        <Typography sx={{ fontSize: '32px' }}>ログイン</Typography>
        <Box sx={{ width: '380px', height: '200px', marginTop: '40px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: '14px', alignItems: 'center' }}>
              メールアドレス
            </Typography>
            <TextField sx={{ width: '200px' }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>パスワード</Typography>
            <TextField sx={{ width: '200px' }} />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" sx={{ width: '120px' }}>
          <Button variant="contained" color="secondary">
            ログイン
          </Button>
          <Button>新規会員登録</Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
