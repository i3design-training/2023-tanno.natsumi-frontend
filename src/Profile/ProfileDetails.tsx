import { Box, Button, TextField, Typography } from '@mui/material';
import Layout from '../layout/Layout';
import { Fragment, useEffect, useState } from 'react';
import { MuiFileInput } from 'mui-file-input';

const ProfileDetail = () => {
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();

  //ファイルhandleChange関数
  const handleChangeFile = (newFile: File | null) => {
    if (newFile) {
      setFile(newFile);
    }
  };

  //メモリ内のBLOBにアクセスするためのURL生成
  useEffect(() => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }, [file]);

  return (
    <>
      <Layout>
        <Box>
          <Typography sx={{ fontSize: '20px', marginTop: '50px' }}>
            プロフィール
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '400px', marginTop: '50px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '14px', alignItems: 'center' }}>
                名前
              </Typography>
              <TextField variant="standard" sx={{ width: '200px' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '50px',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>メールアドレス</Typography>
              <TextField variant="standard" sx={{ width: '200px' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '50px',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>
                プロフィール画像
              </Typography>
              <MuiFileInput
                value={file}
                onChange={handleChangeFile}
                variant="outlined"
              />
              {file &&
                !(file.type === 'image/png' || file.type === 'image/jpeg') && (
                  <Typography
                    variant="caption"
                    component="div"
                    color="error.main"
                    gutterBottom
                  >
                    このファイルタイプはサポートしていません。
                  </Typography>
                )}
              {file &&
                (file.type === 'image/png' || file.type === 'image/jpeg') && (
                  <Fragment>
                    <Typography
                      variant="caption"
                      component="div"
                      mt={1}
                      gutterBottom
                    >
                      送信画像プレビュー
                    </Typography>
                    <img
                      id="preview"
                      src={preview}
                      alt="preview"
                      className="previewimg"
                    />
                  </Fragment>
                )}
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ width: '120px', marginTop: '50px', alignItems: 'center' }}
          >
            <Button variant="contained" color="secondary">
              編集
            </Button>
            <Button>戻る</Button>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default ProfileDetail;
