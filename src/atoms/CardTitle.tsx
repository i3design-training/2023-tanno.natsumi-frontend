import { Typography } from '@mui/material';

interface CardTitleProps {
  title: string;
}

export default function CardTitle({ title }: CardTitleProps) {
  return (
    <>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          paddingLeft: '8px',
        }}
      >
        {title}
      </Typography>
    </>
  );
}
