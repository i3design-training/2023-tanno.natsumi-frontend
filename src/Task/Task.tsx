import { Grid } from '@mui/material';
import Layout from '../layout/Layout';
import TaskList from './TaskList';
import TaskDtail from './taskDetail';

export default function Task() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid
          item
          xs={7}
          md={7}
          sx={{
            borderRight: '2px solid #F8EFEF',
            height: 'calc(100vh - 64px)',
          }}
        ></Grid>
        <Grid item xs={5} md={5}>
          <TaskDtail />
        </Grid>
      </Grid>
    </Layout>
  );
}
