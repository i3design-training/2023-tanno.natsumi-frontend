import TaskCardCompornent from './TaskCardCompornent';

interface Task {
  id: string;
  title: string;
  description: string;
  category_id: string;
  due_date: string;
}

interface TaskCardProps {
  tasks: Task[];
  setSelectedTask: React.Dispatch<
    React.SetStateAction<Task | null | undefined>
  >;
}
export default function TaskCard({ tasks, setSelectedTask }: TaskCardProps) {
  return (
    <>
      {tasks.map((task, index) => (
        <TaskCardCompornent task={task} setSelectedTask={setSelectedTask} />
      ))}
    </>
  );
}
