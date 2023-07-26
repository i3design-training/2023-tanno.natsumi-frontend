import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import CreateTask from '../../organisms/CreateTask';
import { useState } from 'react';
import ActionButton from '../../atoms/ActionButton';

interface CreateTaskButtonProps {
  userId: string | null;
  fetchTasks: () => void;
}

export default function CreateTaskButton({
  userId,
  fetchTasks,
}: CreateTaskButtonProps) {
  //モーダルの開閉
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <ActionButton onClick={handleOpenModal} buttonName="タスク作成" />
      <Modal open={open}>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
              <CreateTask
            onClose={handleCloseModal}
            userId={userId}
            fetchTasks={fetchTasks}
          />
          {/* <CreateTask
            onClose={handleCloseModal}
            userId={userId}
            fetchTasks={fetchTasks}
          /> */}
        </Box>
      </Modal>
    </>
  );
}
