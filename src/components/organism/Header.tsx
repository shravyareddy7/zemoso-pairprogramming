import React from 'react';
import { AppBar, Box, Toolbar, Stack } from '@mui/material';
import IconAndText from '../molecules/IconAndText';
import Location from '../molecules/Location';
import ProfileComponent from '../molecules/ProfileAndUpdates';

const HeaderComponent = () => {
  return (
    <AppBar position="static" color="primary"> 
      <Toolbar>
        <Stack direction="row" alignItems="center" width="100%">
          <Box flexGrow={1}>
            <IconAndText />
          </Box>
          <Box>
            <Location />
          </Box>
          <Box flexGrow={3} display="flex" justifyContent="flex-end">
            <ProfileComponent />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
