import React from 'react';

interface SvgIconProps {
  src: string; 
  alt?: string; 
  width?:string
  height?:string
  
}

const SvgIconComponent: React.FC<SvgIconProps> = ({ src, alt,width,height }) => {
  return (
    <img src={src} alt={alt} width={width} height={height} />
  );
};

export default SvgIconComponent;
