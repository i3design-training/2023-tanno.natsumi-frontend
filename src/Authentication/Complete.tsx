import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import Layout2 from '../layout/Layout2';

const Complete = () => {
  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    console.log(token);
    http
      .post(`/api/user/register?token=${token}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout2>
      <Box sx={{ marginTop: '50px' }}>
        <Typography>アカウントの登録完了</Typography>
        <Typography>
          TODOアプリへのアカウントの登録が完了しました！
          <br />
          サービスを開始する際は下のボタンからログインを行なってください。
        </Typography>
        <Button
          href="/login"
          variant="contained"
          color="secondary"
          sx={{ marginTop: '50px' }}
        >
          ログイン
        </Button>
      </Box>
    </Layout2>
  );
};

export default Complete;
