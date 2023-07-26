import { MenuItem } from '@mui/material';

interface Category {
  id: string;
  name: string;
}

interface SelectMenueProps {
  list: string[] | Category[];
  onClick: (index: number) => void;
}

export default function SelectMenue({ list, onClick }: SelectMenueProps) {
  return (
    <>
      {list.map((item, index) => (
        <MenuItem
          key={index}
          value={typeof item === 'string' ? item : item.name}
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '170%',
          }}
          onClick={() => onClick(index)}
        >
          {typeof item === 'string' ? item : item.name}
        </MenuItem>
      ))}
    </>
  );
}
