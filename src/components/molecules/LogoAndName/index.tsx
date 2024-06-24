import React from 'react';
import { Box } from '@mui/material';
import TextComponent from '../../atoms/Text';
import SvgIconComponent from '../../atoms/Icon';
import { ICONS,TEXTS, ALT_TEXTS,SPACING } from '../../../constants';
const IconAndText: React.FC = () => {
    
  return (
    <Box display='flex' flexDirection='row' alignItems='center' gap={SPACING.SMALL}>
      <SvgIconComponent src={ICONS.LEAF} alt={ALT_TEXTS.LEAF_ICON} />
      <TextComponent variant='h1'>{TEXTS.TITLE}</TextComponent>
    </Box>
  );
};

export default IconAndText;
