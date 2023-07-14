import { Typography } from '@mui/material';
import Layout2 from '../layout/Layout2';
import { Box } from '@mui/system';

const SendingURL = () => {
  return (
    <Layout2>
      <Box sx={{ marginTop: '50px' }}>
        <Typography>アカウントの登録を受け付けました。</Typography>
        <Typography>
          ご登録いただいたメールアドレス宛に、登録確認用メールを送付しましたので、ご確認ください
        </Typography>
      </Box>
    </Layout2>
  );
};

export default SendingURL;
