import { Typography } from "@mui/material";

interface TaskTitleProps {
  title: string;
}

export function TaskTitle({ title }: TaskTitleProps) {
  return (
    <Typography
      gutterBottom
      variant="h6"
      component="div"
      sx={{
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {title}
    </Typography>
  );
}