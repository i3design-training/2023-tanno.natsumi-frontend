import { Typography } from '@mui/material';
import Layout from '../layout/Layout';

const SendingURL = () => {
  return (
    <Layout>
      <Typography>アカウントの登録を受け付けました。</Typography>
      <Typography>
        ご登録いただいたメールアドレス宛に、登録確認用メールを送付しましたので、ご確認ください
      </Typography>
    </Layout>
  );
};

export default SendingURL;
