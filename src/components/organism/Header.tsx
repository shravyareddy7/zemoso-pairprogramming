import React from 'react';
import { AppBar, Box, Toolbar, Stack } from '@mui/material';
import LogoAndName from '../molecules/LogoAndName';
import Location from '../molecules/Location';
import SvgIconComponent from '../atoms/Icon';
import CircularImageCard from '../atoms/Image';
import {ICONS,ALT_TEXTS,ICON_SIZES} from "../../constants"

const HeaderComponent = () => {
  return (
    <AppBar position="static" color="primary"> 
      <Toolbar>
        <Stack direction="row" alignItems="center" width="100%">
          <Box flexGrow={1}>
            <LogoAndName/>
          </Box>
          <Box>
            <Location />
          </Box>
          <Box flexGrow={3} display="flex" justifyContent="flex-end">
          <Box display='flex' flexDirection='row' alignItems='center' gap={2}>
              <SvgIconComponent src={ICONS.MESSAGES} alt={ALT_TEXTS.MESSAGES} width={ICON_SIZES.MEDIUM} height={ICON_SIZES.MEDIUM}/>
              <SvgIconComponent src={ICONS.NOTIFICATIONS} alt={ALT_TEXTS.NOTIFICATIONS}  width={ICON_SIZES.MEDIUM} height={ICON_SIZES.MEDIUM}/>
              <CircularImageCard imagePath={ICONS.PROFILE}/>
          </Box>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
