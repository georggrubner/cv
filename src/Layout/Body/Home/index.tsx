import { Stack, Typography } from "@mui/material"
import { Profile } from "./Profile"

export const Home = () => (
    <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 5, md: 10 }}
        alignItems="center"
        marginTop={{ xs: 8, md: 20 }}
    >
        <Profile />
        <Stack alignItems="flex-start" flexGrow={3} gap={2} marginX={2}>
            <Typography variant="h4">Georg Grubner</Typography>
            <Typography variant="h5">Frontend-Developer living in Vienna,&nbsp;Austria</Typography>
            <Typography maxWidth={400}>
                Passionate and skilled frontend developer with a strong focus on creating
                accessible, high-performance web applications that prioritize user experience and
                inclusivity. Known for a keen attention to detail and the ability to optimize code
                for speed and responsiveness, delivering seamless, cross-platform solutions.
            </Typography>
        </Stack>
    </Stack>
)
