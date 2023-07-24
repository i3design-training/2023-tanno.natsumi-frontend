import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useState } from 'react';

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
  const handleCardClick = (task: Task) => {
    setSelectedTask(task);
  };
  return (
    <>
      {tasks.map((task, index) => (
        <Card
          onClick={() => handleCardClick(task)}
          key={index}
          sx={{
            marginTop: '50px',
            minWidth: '500px',

            background: '#FFF',
            borderBottom: '2px solid #EFD5C3',
            boxShadow: 'none',
            '&:hover': {
              background: '#F2DDCF',
            },
          }}
        >
          <CardActionArea>
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
                {task.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {task.due_date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}
