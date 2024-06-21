import { Box } from '@mui/material'
import notifications from '../../../assets/notications.svg'
import messages from '../../../assets/messages.svg'
import SvgIconComponent from '../../atoms/Icon'
import CircularImageCard from '../../atoms/Image'
import ProfileImage from '../../../assets/profile.png';

const ProfileComponent = () => {
  return (

    <Box display='flex' flexDirection='row' alignItems='center' gap={2}>
        <SvgIconComponent src={messages} alt='messages' width='24px' height='24px'/>
        <SvgIconComponent src={notifications} alt='notifications'  width='24px' height='24px'/>
        <CircularImageCard imagePath={ProfileImage} />
    </Box>
  )
}

export default ProfileComponent
