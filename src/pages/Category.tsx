import { Box, Typography } from '@mui/material';
import Layout from '../layouts/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateCategory from '../molecules/category/TextInputWithCreateButton';
import CategoryCard from '../organisms/CategoryCard';
import Title from '../atoms/Title';

interface Category {
  id: string;
  name: string;
}

export default function Category() {
  const [categories, setCategories] = useState<Category[]>([]);

  const http = axios.create({
    baseURL: 'http://localhost:8000',
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const [userId, setUserId] = useState<string | null>('');

  const fetchCategories = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    setUserId(localStorage.getItem('user_id'));
    try {
      const response = await http.get('/api/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data || !response.data.categories) {
        window.location.href = '/login';
        return;
      }
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  //新規カテゴリ作成の入力
  const [categoryText, setCategoryText] = useState('');
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryText(e.target.value);
  };

  const categoryData = {
    name: categoryText,
    user_id: userId,
  };
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
    <Layout>
      <Box sx={{ marginTop: '50px' }}>
        <Title title={'カテゴリ一覧'} />
        <CreateCategory
          handleChangeText={handleChangeText}
          onClick={createCategory}
        />
        <Box
          sx={{
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CategoryCard
            categories={categories}
            fetchCategories={fetchCategories}
          />
        </Box>
      </Box>
    </Layout>
  );
}
