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
import ActionButton from '../../atoms/ActionButton';
import InputText from '../../molecules/InputText';
import IsVisibility from '../../molecules/IsVisibility';

const TextFieldStyle = {
  display: 'flex',
  marginTop: '30px',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Registration = () => {
  //入力されたメールアドレス
  const [userName, setUserNail] = useState('');

  //入力されたメールアドレス
  const [userMail, setUserMail] = useState('');

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
            <InputText setText={setUserNail} label="名前" />
          </Box>
          <Box
            sx={{
              ...TextFieldStyle,
            }}
          >
            <InputText setText={setUserMail} label="名前" />
          </Box>
          <Box
            sx={{
              ...TextFieldStyle,
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>パスワード</Typography>
            <FormControl sx={{ m: 2, width: '23ch' }} variant="standard">
              <IsVisibility setText={setUserPassword} />
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
              <IsVisibility setText={setUserCheckPassword} />
            </FormControl>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: '130px', marginTop: '40px' }}
        >
          <ActionButton buttonName="登録する" onClick={handleRegistration} />
          <Button href="/login">ログインはこちら</Button>
        </Box>
      </Box>
    </Layout2>
  );
};

export default Registration;
