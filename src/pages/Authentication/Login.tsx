import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from '@mui/material';
import Layout2 from '../../layouts/Layout2';
import { useState } from 'react';
import axios from 'axios';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
  //入力されたメールアドレス
  const [userMail, setUserMail] = useState('');
  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMail(e.target.value);
  };

  //入力されたパスワード
  const [userPassword, setUserPassword] = useState('');
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const loginData = {
    email: userMail,
    password: userPassword,
  };
  //ログイン失敗時のエラー表示
  const [loginError, setLoginError] = useState('');

  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });

  const handleLogin = async () => {
    try {
      const response = await http.post('/api/user/login', loginData);
      console.log(response.data);
      if (response.data.token) {
        //ローカルストレージに保存
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_id', response.data.user_id);
        window.location.href = '/category';
      }
    } catch (error) {
      console.log(error);
      setLoginError('メールアドレスかパスワードが間違っています。');
    }
  };

  //パスワードの文字表示変換
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Layout2>
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
            <FormControl sx={{ m: 2, width: '23ch' }} variant="standard">
              <Input onChange={handleChangeMail} />
            </FormControl>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '50px',
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>パスワード</Typography>
            <FormControl sx={{ m: 2, width: '23ch' }} variant="standard">
              <Input
                onChange={handleChangePassword}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: '120px', marginTop: '40px' }}
        >
          {loginError && (
            <Typography sx={{ color: 'red' }}>{loginError}</Typography>
          )}
          <Button variant="contained" color="secondary" onClick={handleLogin}>
            ログイン
          </Button>
          <Button href="/registration">新規会員登録</Button>
        </Box>
      </Box>
    </Layout2>
  );
}
