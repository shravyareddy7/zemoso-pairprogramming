import { Typography, TypographyProps } from '@mui/material'
import React, { ReactNode } from 'react'

interface Iprops{
    children:ReactNode
    variant:TypographyProps['variant']
}
const TextComponent: React.FC<Iprops>= ({variant,children}) => {
  return (
    <Typography variant={variant}>
      {children}
    </Typography>
  )
}

export default TextComponent
