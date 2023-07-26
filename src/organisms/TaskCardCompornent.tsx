import CardComponent from '../molecules/CardCompornent';

interface TaskCardCompornentProps {
  task: Task;
  setSelectedTask: React.Dispatch<
    React.SetStateAction<Task | null | undefined>
  >;
}
interface Task {
  id: string;
  title: string;
  description: string;
  category_id: string;
  due_date: string;
}
export default function TaskCardCompornent({
  task,
  setSelectedTask,
}: TaskCardCompornentProps) {
  const handleCardClick = () => {
    setSelectedTask(task);
  };
  return (
    <>
      <CardComponent
        onClick={handleCardClick}
        title={task.title}
        info={task.due_date}
      />
    </>
  );
}
