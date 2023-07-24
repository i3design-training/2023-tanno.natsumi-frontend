import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import EditTask from '../../organisms/EditTask';
import { useState } from 'react';

export function TaskActionButtons() {
  //モーダルの開閉
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '130px' }}>
      <Button
        onClick={handleOpenModal}
        variant="contained"
        color="secondary"
        sx={{ marginBottom: '8px' }}
      >
        編集する
      </Button>
      <Modal open={open}>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <EditTask onClose={handleCloseModal} />
        </Box>
      </Modal>
      <Button color="error">削除</Button>
    </Box>
  );
}
