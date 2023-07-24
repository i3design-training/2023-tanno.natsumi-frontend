import { Box } from '@mui/system';
import DeleteCategory from '../atoms/DeleteCategory';
import CategoryTaskCard from '../molecules/category/CategoryTaskCard';

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
          <DeleteCategory
            categoryId={category.id}
            fetchCategories={fetchCategories}
          />
        </Box>
      ))}
    </>
  );
}
