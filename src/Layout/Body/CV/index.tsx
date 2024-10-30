import { Box, Link, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { skills, projects } from './data'

export const CV = () => {
    return (
        <Box maxWidth="50vw" marginX="auto">
            <Stack justifyContent="space-around">
                <Typography variant="h4">#Skills</Typography>
                {skills.map(([name, href]) => (
                    <Link width="fit-content" href={href} target="_blank" rel="noopener noreferrer">
                        <Typography variant="body1">{name}</Typography>
                    </Link>
                ))}
                <Typography variant="h4">#Projects</Typography>
                {projects.map(({ name, description, features, tech, achievements }) => (
                    <Stack marginLeft={3}>
                        <Typography variant="h6">{name}</Typography>
                        <List>
                            <ListItem disablePadding>
                                <ListItemText primary="Description" secondary={description} />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="Key Features" secondary={features} />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="Tech Stack" secondary={tech} />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="Achievements" secondary={achievements} />
                            </ListItem>
                        </List>
                    </Stack>
                ))}
            </Stack>
        </Box>
    )
}
