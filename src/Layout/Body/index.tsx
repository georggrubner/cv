import { Stack, Typography } from '@mui/material'
import { Profile } from './Profile'

export const Body = () => {
    return (
        <Stack direction="row" margin={10} justifyContent="center" gap={8}>
            <Profile />
            <Stack alignItems="flex-start" flexGrow={3} marginTop={4}>
                <Typography variant="h4">Frontend-Developer</Typography>
                <Typography variant="h5">Georg Grubner</Typography>
                <Typography>I am a Frontend-Developer living in Vienna, Austria</Typography>
            </Stack>
        </Stack>
    )
}
