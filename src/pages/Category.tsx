import { Box, Typography } from '@mui/material';
import Layout from '../layouts/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateCategory from '../molecules/category/CreateCategory';
import CategoryCard from '../organisms/CategoryCard';

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

  return (
    <Layout>
      <Box sx={{ marginTop: '50px' }}>
        <Typography variant="h4" sx={{ fontWeight: '700', display: 'flex' }}>
          カテゴリーリスト
        </Typography>
        <CreateCategory fetchCategories={fetchCategories} userId={userId} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
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
