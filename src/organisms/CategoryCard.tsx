import { Box } from '@mui/system';
import CategoryTaskCard from './CategoryCardCompornent';
import DeleteButton from '../atoms/DeleteButton';
import axios from 'axios';

interface Category {
  id: string;
  name: string;
}

interface CategoryProps {
  categories: Category[];
  fetchCategories: () => void;
}

export default function CategoryCard({
  categories,
  fetchCategories,
}: CategoryProps) {
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
      {categories.map((category) => (
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <CategoryTaskCard
            categoryId={category.id}
            categoryName={category.name}
          />
          <DeleteButton onClick={deleteCategory} />
        </Box>
      ))}
    </>
  );
}
