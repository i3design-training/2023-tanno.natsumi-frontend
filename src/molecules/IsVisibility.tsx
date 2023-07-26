import { Input, InputAdornment } from '@mui/material';
import { useState } from 'react';
import IsVisibilityButton from '../atoms/IsVisibilityButton';

interface IsVisibilityProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function IsVisibility({ setText }: IsVisibilityProps) {
  //パスワードの文字表示変換
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Input
      onChange={handleChangePassword}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IsVisibilityButton
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            showPassword={showPassword}
          />
        </InputAdornment>
      }
    />
  );
}
