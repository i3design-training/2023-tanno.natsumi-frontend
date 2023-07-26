import { Select, SelectChangeEvent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SelectMenue from '../../atoms/SelectMenue';

interface Category {
  id: string;
  name: string;
}

interface SelectCategoryProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}

export default function SelectCategory({
  setCategory,
  category,
}: SelectCategoryProps) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  // メニューにカテゴリの名前を入れるため
  const [categories, setCategories] = useState<Category[]>([]);
  const fetchCategories = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await http.get('/api/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const categoryNames: string[] = categories.map((category) => category.name);

  const handleMenuItemClick = (index: number) => {
    // const selectedCategory = categoryNames[index]; // インデックスに応じた選択されたカテゴリを取得
    // setCategory(selectedCategory);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '14px', alignItems: 'center' }}>
        カテゴリ
      </Typography>
      <Select
        placeholder={'select category...'}
        displayEmpty
        value={category}
        onChange={handleChange}
        style={{
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '170%',
        }}
      >
        <SelectMenue list={categories} onClick={handleMenuItemClick} />
      </Select>
    </Box>
  );
}
