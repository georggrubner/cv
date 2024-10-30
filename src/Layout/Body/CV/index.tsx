import { Box, Link, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { skills, projects } from './data'

export const CV = () => {
    return (
        <Box maxWidth={{ xs: '80vw', md: '60vw' }} marginX="auto" marginTop={{ xs: 4, md: 10 }}>
            <Stack justifyContent="space-around" gap={4}>
                <Stack>
                    <Typography variant="h4">#Projects</Typography>
                    {projects.map(({ name, description, features, tech, achievements }) => (
                        <Stack marginLeft={3}>
                            <Typography variant="h6">{name}</Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText inset primary="Description" secondary={description} />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText inset primary="Key Features" secondary={features} />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText inset primary="Tech Stack" secondary={tech} />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText inset primary="Achievements" secondary={achievements} />
                                </ListItem>
                            </List>
                        </Stack>
                    ))}
                </Stack>
                <Stack>
                    <Typography variant="h4">#Skills</Typography>
                    {skills.map(([name, href]) => (
                        <Link width="fit-content" href={href} target="_blank" rel="noopener noreferrer">
                            <Typography variant="body1">{name}</Typography>
                        </Link>
                    ))}
                </Stack>
            </Stack>
        </Box>
    )
}
