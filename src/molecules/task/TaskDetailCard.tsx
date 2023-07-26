// モレキュール
import { Paper } from '@mui/material';
import { TaskTitle } from '../../atoms/taskDetail/TaskTitle';
import { TaskDescription } from './TaskDescription';

interface Task {
  id: string;
  title: string;
  description: string;
  category_id: string;
  due_date: string;
}

interface TaskDetailsCardProps {
  task: Task;
  categoryName?: string | undefined;
}

export default function TaskDetailsCard({ task, categoryName }: TaskDetailsCardProps) {
  return (
    <Paper
      color="primary"
      sx={{
        marginTop: '50px',
        width: 445,
        background: '#FFF',
        padding: '16px',
      }}
    >
      {task && (
        <>
          <TaskTitle title={task.title} />
          <TaskDescription label="期日" value={task.due_date} />
          <TaskDescription label="カテゴリ" value={categoryName} />
          <TaskDescription label="詳細" value={task.description} />
        </>
      )}
    </Paper>
  );
}
