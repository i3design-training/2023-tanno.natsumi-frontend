import { Menu, MenuItem } from '@mui/material';

interface AvatorProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

export default function AvatorMenu({ anchorEl, handleClose }: AvatorProps) {
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
        onClose={handleClose}
      >
        <MenuItem
          color="primary"
          onClick={handleClose}
          sx={{
            fontFamily: 'Noto Sans JP',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '170%',
          }}
        >
          プロフィール
        </MenuItem>
        <MenuItem
          color="error"
          onClick={handleClose}
          sx={{
            fontFamily: 'Noto Sans JP',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '170%',
          }}
        >
          ログアウト
        </MenuItem>
      </Menu>
    </>
  );
}
