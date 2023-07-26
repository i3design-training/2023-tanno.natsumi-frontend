import EditTaskButton from '../molecules/task/EditTaskButton';
import TaskDetailsCard from '../molecules/task/TaskDetailCard';

interface Task {
  id: string;
  title: string;
  description: string;
  category_id: string;
  due_date: string;
}

type TaskDetailProps = {
  task: Task;
  categoryName?: string;
};

export default function TaskDetail({ task, categoryName }: TaskDetailProps) {
  return (
    <>
      <TaskDetailsCard task={task} categoryName={categoryName} />
      <EditTaskButton />
    </>
  );
}
