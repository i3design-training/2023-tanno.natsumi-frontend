import { Typography } from "@mui/material";

interface CardInfoProps{
  info: string | undefined;
}

export default function CardInfo({info}: CardInfoProps) {
  return (
    <>
      <Typography variant="body2" color="text.secondary">
        {info}
      </Typography>
    </>
  );
}
