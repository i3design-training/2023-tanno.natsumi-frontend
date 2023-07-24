import { Avatar, Button } from '@mui/material';
import AvatorMenu from '../../atoms/AvatorMenu';
import { useState } from 'react';

export default function HeaderAvatorMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AvatorMenu anchorEl={anchorEl} handleClose={handleClose} />
      <Button
        variant="contained"
        onClick={handleMenu}
        sx={{
          wide: '56px',
          height: '42px',
          alignItems: 'center',
          padding: '0px',
          boxShadow: 'none',
        }}
      >
        <Avatar />
      </Button>
    </>
  );
}
