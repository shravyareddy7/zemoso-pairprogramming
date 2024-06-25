import { Stack } from '@mui/material';
import TextComponent from '../../atoms/Text';
import SvgIconComponent from '../../atoms/Icon';
import React from 'react';
import { ICONS, ALT_TEXTS, ICON_SIZES, SPACING, MARGINS } from '../../../constants';

interface Iprops{
  location:string 
}
const Location: React.FC<Iprops>= ({location}) => {
  return (
    <Stack direction='column' spacing={SPACING.SMALL} marginBottom={MARGINS.BOTTOM}>
      <Stack direction='row' spacing={SPACING.MEDIUM}>
        <SvgIconComponent src={ICONS.MAP_PIN} alt={ALT_TEXTS.MAP_PIN_ICON} width={ICON_SIZES.SMALL} height={ICON_SIZES.SMALL} />
        <TextComponent variant='body1'>{location}</TextComponent>
      </Stack>
      <SvgIconComponent src={ICONS.UNDERLINE} />
    </Stack>
  );
};

export default Location;