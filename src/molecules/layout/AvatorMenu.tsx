import { Menu, MenuItem } from '@mui/material';
import SelectMenue from '../../atoms/SelectMenue';
import { useNavigate } from 'react-router-dom';

interface AvatorProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

export default function AvatorMenu({ anchorEl, handleClose }: AvatorProps) {
  const List: string[] = ['プロフィール', 'ログアウト'];

  const navigate = useNavigate(); // ヒストリーオブジェクトを取得

  const handleMenuItemClick = (index: number) => {
    if (List[index] === 'プロフィール') {
      navigate('/profiledetail');
    } else if (List[index] === 'ログアウト') {
      navigate('/login');
    }
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuItemClick}
      >
        <SelectMenue list={List} onClick={handleMenuItemClick} />
      </Menu>
    </>
  );
}
