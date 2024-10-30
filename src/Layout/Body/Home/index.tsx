import { Stack, Typography } from '@mui/material'
import { Profile } from './Profile'

export const Home = () => (
    <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 5, md: 10 }} alignItems="center">
        <Profile />
        <Stack alignItems="flex-start" flexGrow={3} gap={2} marginX={2}>
            <Typography variant="h4">Frontend-Developer</Typography>
            <Typography variant="h5">Georg Grubner</Typography>
            <Typography>I am a Frontend-Developer living in Vienna,&nbsp;Austria</Typography>
        </Stack>
    </Stack>
)
