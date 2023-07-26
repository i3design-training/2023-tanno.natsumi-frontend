import { Button } from '@mui/material';

interface ActionButtonProps {
  onClick: () => void;
  buttonName: string;
}

export default function ActionButton({
  onClick,
  buttonName,
}: ActionButtonProps) {
  return (
    <>
      <Button
        onClick={onClick}
        variant="contained"
        color="secondary"
        sx={{ marginBottom: '8px' }}
      >
        {buttonName}
      </Button>
    </>
  );
}
