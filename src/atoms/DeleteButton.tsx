import { IconButton } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

interface DeleteCategoryProps {
  onClick: (categoryId: string) => Promise<void>;
}

export default function DeleteButton({ onClick }: DeleteCategoryProps) {
  return (
    <>
      <IconButton
        onClick={() => onClick}
        sx={{
          width: '30px',
          height: '30px',
        }}
      >
        <DeleteForeverRoundedIcon color="primary" />
      </IconButton>
    </>
  );
}
