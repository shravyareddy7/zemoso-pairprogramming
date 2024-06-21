import React from 'react';
import { Box } from '@mui/material';
import TextComponent from '../../atoms/Text';
import SvgIconComponent from '../../atoms/Icon';
import LeafIcon from '../../../assets/leaf.svg'
const IconAndText: React.FC = () => {
    
  return (
    <Box display='flex' flexDirection='row' alignItems='center' gap={0.5}>
      <SvgIconComponent src={LeafIcon} alt="Leaf Icon" />
      <TextComponent variant='h1'>GREEN COMMUTE</TextComponent>
    </Box>
  );
};

export default IconAndText;
