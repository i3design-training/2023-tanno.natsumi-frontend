import { useNavigate } from 'react-router-dom';
import CardComponent from '../molecules/CardCompornent';

interface CardDetailProps {
  categoryId: string;
  categoryName: string;
}
export default function CategoryTaskCard({
  categoryId,
  categoryName,
}: CardDetailProps) {
  //カードを押したときに、カテゴリIDを渡す。
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/categorytask', {
      state: { message: categoryId },
    });
  };

  return (
    <>
      <CardComponent onClick={onClickNavigate} title={categoryName} />
    </>
  );
}
