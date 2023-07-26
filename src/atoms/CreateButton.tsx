import { IconButton } from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

interface CreateButtonProps{
  onClick: ()=> void;
}

export default function CreateButton( {onClick}: CreateButtonProps ){
  return(
    <IconButton size="large" onClick={onClick}>
        <ControlPointIcon fontSize="inherit" color="primary" />
      </IconButton>
  );
}