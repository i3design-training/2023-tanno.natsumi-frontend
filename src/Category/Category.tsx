import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  FormControl,
  IconButton,
  Input,
  Typography,
} from '@mui/material';
import Layout from '../layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import axios from 'axios';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

interface Category {
  id: string;
  name: string;
}

export default function Category() {
  //カードを押したときに、カテゴリIDを渡す。
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);

  //新規カテゴリ作成の入力
  const [categoryText, setCategoryText] = useState('');
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryText(e.target.value);
  };

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
      if (!response.data.categories) {
        window.location.href = '/login';
        return;
      }
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
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
    <Layout>
      <Box sx={{ marginTop: '50px' }}>
        <Typography variant="h4" sx={{ fontWeight: '700', display: 'flex' }}>
          カテゴリーリスト
        </Typography>
        <FormControl sx={{ m: 2, width: '23ch' }} variant="standard">
          <Input onChange={handleChangeText} />
        </FormControl>
        <IconButton size="large" onClick={createCategory}>
          <ControlPointIcon fontSize="inherit" color="primary" />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {categories.map((category, index) => (
            <Box
              key={category.id}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
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
                      state: { message: category.id },
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
                      {category.name}
                    </Typography>
                  </CardContent>
                  <Typography color="secondary">
                    {category.name}タスク一覧を見る→
                  </Typography>
                </CardActionArea>
              </Card>
              <IconButton
                onClick={() => deleteCategory(category.id)}
                sx={{
                  marginLeft: '8px',
                }}
              >
                <DeleteForeverRoundedIcon color="primary" />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}
