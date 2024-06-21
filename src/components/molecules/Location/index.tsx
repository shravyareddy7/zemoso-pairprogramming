import { Stack } from '@mui/material'
import TextComponent from '../../atoms/Text'
import MapIcon from '../../../assets/map-pin.svg'
import SvgIconComponent from '../../atoms/Icon'
import Underline from '../../../assets/underline.svg'
import React from 'react'

const Location = () => {
  return (
    <Stack direction='column' spacing={0.5} marginBottom={0}>
        <Stack direction='row' spacing={2}>
        <SvgIconComponent src={MapIcon} alt="Leaf Icon" width='18px' height='18px'/>  
        <TextComponent variant='body1'>East Maredpally, Secunderabad</TextComponent>
        </Stack>
      
        <SvgIconComponent src={Underline} ></SvgIconComponent>
    </Stack>
  )
}

export default Location
