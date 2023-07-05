import { AppBar, Container, ThemeProvider, createTheme } from '@mui/material';
import { useEffect } from 'react';

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

  return (
    <ThemeProvider theme={apptheme}>
      <Container>
        <AppBar sx={{ height: '40px' }}></AppBar>
        {children}
      </Container>
    </ThemeProvider>
  );
}
