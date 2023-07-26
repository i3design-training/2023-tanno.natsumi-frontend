import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface IsVisibilityButtonProps {
  onClick: () => void;
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showPassword: boolean;
}

export default function IsVisibilityButton({
  onClick,
  onMouseDown,
  showPassword,
}: IsVisibilityButtonProps) {
  return (
    <IconButton onClick={onClick} onMouseDown={onMouseDown}>
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  );
}
