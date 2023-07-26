import { Typography } from '@mui/material';

interface TitleProps {
  title: string | undefined;
}

export default function Title({ title }: TitleProps) {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: '700', display: 'flex' , marginTop: '60px'}}>
        {title}
      </Typography>
    </>
  );
}
