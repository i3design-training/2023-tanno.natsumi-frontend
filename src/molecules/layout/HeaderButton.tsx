import { Button, Typography } from '@mui/material';

export default function HeaderButton() {
  return (
    <>
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
          カテゴリー
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
    </>
  );
}
