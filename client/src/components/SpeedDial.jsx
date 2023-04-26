import * as React from 'react';
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

const BasicSpeedDial = ({buttons}) => {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {buttons.map((button) => (
          <SpeedDialAction
            key={button.name}
            icon={button.icon}
            tooltipTitle={button.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default BasicSpeedDial;