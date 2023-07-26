import { CardActionArea, CardContent, Card } from '@mui/material';
import CardTitle from '../atoms/CardTitle';
import CardInfo from '../atoms/CardInfo';

interface CardComponentProps {
  onClick: () => void;
  title: string;
  info?: string;
}

export default function CardComponent({
  onClick,
  title,
  info,
}: CardComponentProps) {
  return (
    <>
      <Card
        sx={{
          marginTop: '50px',
          width: '50vw',
          background: '#FFF',
        }}
      >
        <CardActionArea onClick={onClick}>
          <CardContent>
            <CardTitle title={title} />
            <CardInfo info={info} />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
