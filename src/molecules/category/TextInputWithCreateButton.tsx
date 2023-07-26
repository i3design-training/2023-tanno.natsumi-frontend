import { FormControl, IconButton, Input } from '@mui/material';
import CreateButton from '../../atoms/CreateButton';

interface TextInputWithCreateButtonProps {
  handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
export default function TextInputWithCreateButton({
  handleChangeText,
  onClick,
}: TextInputWithCreateButtonProps) {
  return (
    <>
      <FormControl sx={{ m: 2, width: '23ch' }} variant="standard">
        <Input onChange={handleChangeText} />
      </FormControl>
      <CreateButton onClick={onClick} />
    </>
  );
}
