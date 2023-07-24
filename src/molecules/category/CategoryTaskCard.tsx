import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardDetailProps {
  categoryId: string;
  categoryName: string;
}
export default function CategoryTaskCard({ categoryId, categoryName }: CardDetailProps) {
  //カードを押したときに、カテゴリIDを渡す。
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          marginTop: '50px',
          minWidth: '500px',
          background: '#FFF',
        }}
      >
        <CardActionArea
          onClick={() => {
            navigate('/categorytask', {
              state: { message: categoryId },
            });
          }}
        >
          <CardContent>
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
              {categoryName}
            </Typography>
          </CardContent>
          <Typography color="secondary">
            {categoryName}タスク一覧を見る→
          </Typography>
        </CardActionArea>
      </Card>
    </>
  );
}