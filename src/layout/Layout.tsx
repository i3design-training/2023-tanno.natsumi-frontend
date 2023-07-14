import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';

type LayoutProps = {
  children?: React.ReactNode;
};

const apptheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#AAC0AF',
    },
    secondary: {
      main: '#EFD5C3',
    },
    text: {
      primary: '#293131',
      secondary: '#3d4844',
      disabled: 'rgba(0,0,0,0.34)',
    },
    info: {
      main: '#73a0a5',
    },
    success: {
      main: '#509e54',
    },
    background: {
      default: '#ffffff',
    },
  },
});

const textStyle = {
  fontFamily: 'Noto Sans',
  fontStyle: 'normal',
  fontSize: '17px',
};

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // body タグのマージンをリセットする
    document.body.style.margin = '0';
  }, []);
  //アイコンのメニュー
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={apptheme}>
      <Container>
        <AppBar sx={{ height: '40px', display: 'flex' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}
          >
            <Button href={'/category'} sx={{ width: '140px' }}>
              <Typography
                sx={{
                  fontFamily: 'Noto Sans JP',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '14px',
                  lineHeight: '170%',
                  color: '#293131',
                }}
              >
                カテゴリー一覧
              </Typography>
            </Button>
            <Button href={'/tasklist'} sx={{ width: '140px' }}>
              <Typography
                sx={{
                  fontFamily: 'Noto Sans JP',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '14px',
                  lineHeight: '170%',
                  color: '#293131',
                }}
              >
                タスク一覧
              </Typography>
            </Button>
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
          </Box>
        </AppBar>
        {children}
      </Container>
    </ThemeProvider>
  );
}
