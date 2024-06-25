import React from 'react';
import { Box, TypographyProps } from '@mui/material';
import TextComponent from '../../atoms/Text';
import SvgIconComponent from '../../atoms/Icon';
import {SPACING } from '../../../constants';

interface Iprops{
  iconSrc:string
  iconAlt:string 
  variant:TypographyProps['variant']
  title:string
}
const IconAndText: React.FC<Iprops> = ({iconSrc, iconAlt,variant,title}) => {
    
  return (
    <Box display='flex' flexDirection='row' alignItems='center' gap={SPACING.SMALL}>
      <SvgIconComponent src={iconSrc} alt={iconAlt} />
      <TextComponent variant={variant}>{title}</TextComponent>
    </Box>
  );
};

export default IconAndText;
