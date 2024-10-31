import { Box, Button, Link, List, ListItem, ListItemText, Stack, Typography } from "@mui/material"
import { skills, projects } from "./data"
import pdf from "/src/assets/CV Georg Grubner.pdf"

export const CV = () => {
    return (
        <Box maxWidth={{ xs: "80vw", md: "60vw" }} marginX="auto" marginTop={{ xs: 3, md: 6 }}>
            <Box marginBottom={3} display="flex" justifyContent="flex-end">
                <Button href={pdf} target="_blank">
                    Download CV
                </Button>
            </Box>
            <Stack justifyContent="space-around" gap={4}>
                <Stack gap={2}>
                    <Typography variant="h4">#Projects</Typography>
                    <Stack marginLeft={2}>
                        {projects.map(({ name, description, features, tech, achievements }) => (
                            <Stack>
                                <Typography variant="h6">{name}</Typography>
                                <Box marginLeft={3}>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="Description"
                                                secondary={description}
                                            />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="Key Features"
                                                secondary={features}
                                            />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText primary="Tech Stack" secondary={tech} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="Achievements"
                                                secondary={achievements}
                                            />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
                <Stack gap={2}>
                    <Typography variant="h4">#Skills</Typography>
                    <Box marginLeft={2}>
                        {skills.map(([name, href], index) => (
                            <>
                                <Link
                                    width="fit-content"
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {name}
                                </Link>
                                {index !== skills.length - 1 && ", "}
                            </>
                        ))}
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}
