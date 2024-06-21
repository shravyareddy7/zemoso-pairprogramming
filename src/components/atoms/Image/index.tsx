import React from 'react';
import { Card, CardMedia } from '@mui/material';
import theme from '../../../themes';

interface CircularImageCardProps {
  imagePath: string;
}

const CircularImageCard: React.FC<CircularImageCardProps> = ({ imagePath }) => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  width: '36px', height: '36px',backgroundColor:theme.palette.primary.main, boxShadow:'none' }}>
      
      <CardMedia 
        component="img"
        src={imagePath}
        alt="Profile"
        sx={{width: '36px', height: '36px', borderRadius: '50%'}}
      /> 
      
    </Card>
  );
};

export default CircularImageCard;
