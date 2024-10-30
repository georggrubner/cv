import { Box } from '@mui/material'
import profile from '/src/assets/profile.jpg'

export const Profile = () => (
    <Box display="flex" justifyContent={{ xs: 'flex-start', md: 'flex-end' }} flexGrow={2}>
        <img
            style={{
                boxShadow: '0 0 10px',
                borderRadius: 22,
                objectFit: 'cover',
            }}
            src={profile}
            width="250"
            height="300"
            alt="profile"
        />
    </Box>
)
