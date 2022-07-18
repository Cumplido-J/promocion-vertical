

import  React, { useEffect,useState } from 'react';
import { Box, Collapse, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

/*const ActionAlerts = ( {isStatus = false, userSend}) => {
  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    setOpen(isStatus);
  },[isStatus]);


  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
        severity={!userSend.sucess ? `error`:`success`}
          action={
            <IconButton
              aria-label="close"
              color={!userSend.sucess ? `error`:`inherit`}
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
      
        {
        !userSend.sucess ? userSend.message: `Registro satisfactorio`
          
        }
        </Alert>
      </Collapse>
    </Box>
  );
}

export default ActionAlerts;*/

// eslint-disable-next-line import/no-anonymous-default-export
