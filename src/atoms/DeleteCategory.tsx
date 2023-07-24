import { IconButton } from '@mui/material';
import axios from 'axios';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

interface DeleteCategoryProps {
  categoryId: string;
  fetchCategories: () => void;
}

export default function DeleteCategory({
  categoryId,
  fetchCategories,
}: DeleteCategoryProps) {
  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });
  const deleteCategory = async (categoryId: string) => {
    console.log(categoryId);
    try {
      await http.delete(`/api/category/${categoryId}`);
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <IconButton
        onClick={() => deleteCategory(categoryId)}
        sx={{
          marginLeft: '8px',
        }}
      >
        <DeleteForeverRoundedIcon color="primary" />
      </IconButton>
    </>
  );
}
