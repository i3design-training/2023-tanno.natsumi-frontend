import { FormControl, IconButton, Input } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useState } from 'react';
import axios from 'axios';

interface CreateCategoryProps {
  fetchCategories: () => void;
  userId: string | null;
}
export default function CreateCategory({
  fetchCategories,
  userId,
}: CreateCategoryProps) {
  //新規カテゴリ作成の入力
  const [categoryText, setCategoryText] = useState('');
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryText(e.target.value);
  };

  const categoryData = {
    name: categoryText,
    user_id: userId,
  };
  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });
  const createCategory = async () => {
    try {
      const response = await http.post('/api/category', categoryData);
      console.log(response.data);
      setCategoryText('');
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormControl sx={{ m: 2, width: '23ch' }} variant="standard">
        <Input onChange={handleChangeText} />
      </FormControl>
      <IconButton size="large" onClick={createCategory}>
        <ControlPointIcon fontSize="inherit" color="primary" />
      </IconButton>
    </>
  );
}
