import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import Layout2 from '../layout/Layout2';
import { useState } from 'react';
import axios from 'axios';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const TextFieldStyle = {
  display: 'flex',
  marginTop: '30px',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Registration = () => {
  //入力されたメールアドレス
  const [userName, setUserNail] = useState('');
  const handleChangeNaim = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNail(e.target.value);
  };

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

  //入力された確認用パスワード
  const [userCheckPassword, setUserCheckPassword] = useState('');
  const handleChangeCheckPassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUserCheckPassword(e.target.value);
  };

  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });

  const RegistrationData = {
    name: userName,
    email: userMail,
    password: userPassword,
  };

  const handleRegistration = async () => {
    await http
      .post('/api/users', RegistrationData)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          window.location.href = '/sendingurl';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //パスワードの文字表示変換
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  //確認用パスワードの文字表示変換
  const [showCheckPassword, setShowCheckPassword] = useState(false);
  const handleClickShowCheckPassword = () =>
    setShowCheckPassword((show) => !show);
  const handleMouseDownCheckPassword = (
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
        <Typography sx={{ fontSize: '32px' }}>新規会員登録</Typography>
        <Box sx={{ width: '500px', marginTop: '10px' }}>
          <Box
            sx={{
              ...TextFieldStyle,
            }}
          >
            <Typography sx={{ fontSize: '14px', alignItems: 'center' }}>
              名前
            </Typography>
            <FormControl sx={{ m: 2, width: '23ch' }} variant="standard">
              <Input onChange={handleChangeNaim} />
            </FormControl>
          </Box>
          <Box
            sx={{
              ...TextFieldStyle,
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
              ...TextFieldStyle,
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
          <Box
            sx={{
              ...TextFieldStyle,
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>
              パスワード（確認用）
            </Typography>
            <FormControl sx={{ m: 2, width: '23ch' }} variant="standard">
              <Input
                onChange={handleChangeCheckPassword}
                type={showCheckPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowCheckPassword}
                      onMouseDown={handleMouseDownCheckPassword}
                    >
                      {showCheckPassword ? <VisibilityOff /> : <Visibility />}
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
          sx={{ width: '130px', marginTop: '40px' }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRegistration}
          >
            登録する
          </Button>
          <Button href="/login">ログインはこちら</Button>
        </Box>
      </Box>
    </Layout2>
  );
};

export default Registration;
