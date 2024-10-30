import { Box, Link, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'

const links = [
    ['react', 'https://github.com/facebook/react'],
    ['TypeScript', 'https://github.com/microsoft/TypeScript'],
    ['eslint', 'https://github.com/eslint/eslint'],
    ['prettier', 'https://github.com/prettier/prettier'],
    ['vite', 'https://github.com/vitejs/vite'],
    ['node', 'https://github.com/nodejs/node'],
    ['react-query', 'https://github.com/facebook/reactreact-query'],
    ['zustand', 'https://github.com/pmndrs/zustand'],
    ['recoil', 'https://github.com/facebookexperimental/Recoil'],
    ['next.js', 'https://github.com/vercel/next.js'],
    ['material-ui', 'https://github.com/mui/material-ui'],
    ['tailwindcss', 'https://github.com/tailwindlabs/tailwindcss'],
    ['emotion', 'https://github.com/emotion-js/emotion'],
    ['storybook', 'https://github.com/storybookjs/storybook'],
    ['classnames', 'https://github.com/JedWatson/classnames'],
]

const projects = [
    {
        name: 'Customizable Design System and Component Library',
        description:
            'Created a reusable component library for an organization to maintain consistent UI across projects, with flexible theming capabilities.',
        features:
            'Developed a variety of reusable components, documented usage patterns, and implemented dark/light theme support.',
        tech: 'storybook, react, emotion, cypress for testing',
        achievements: 'Decreased development time for new projects and ensured design consistency across platforms.',
    },
    {
        name: 'Interactive Dashboard for Data Visualization',
        description:
            'Developed a web-based data visualization dashboard for a SaaS company to provide users with insights into their usage metrics.',
        features: 'Designed and implemented interactive charts, filtering options, and real-time data updates.',
        tech: 'react, redux, axios, custom Design System',
        achievements: 'Delivered a highly interactive and responsive dashboard',
    },
    {
        name: 'Insurance Customer Portal',
        description:
            'Developed a responsive web application for an insurance company to allow customers to view and manage their insurance policies, claims, and payments.',
        features:
            'The portal included policy details, claim history, premium due dates, and the ability to download policy documents.',
        tech: 'react, material-ui, recoil, react-query, playwright for testing.',
        achievements: 'Reduced customer support queries with easy access to policy information.',
    },
    {
        name: 'Data Aggregation and Streamlining Tool',
        description:
            'Developed a responsive front-end for a data aggregation tool, enabling administrators to manage, monitor, and configure data sources efficiently across various APIs.Developed a data aggregation and processing tool to streamline the collection of data from various sources, normalize it, and then forward it.',
        features:
            'Implemented a user-friendly interface for setting up and managing data source connections, viewing data ingestion statuses, and handling error logs. Created detailed filtering and search capabilities for quick data source lookup and streamlined navigation for enhanced efficiency.',
        tech: 'react, redux, axios, custom Design System',
        achievements:
            'Simplified complex workflows, reduced setup time, and increased accuracy through intuitive error-handling and monitoring capabilities.',
    },
    {
        name: 'User Permissions Administration Tool',
        description:
            'Built a front-end interface for managing user roles and permissions, enabling administrators to assign, modify, and review access levels for users across different departments and groups.',
        features:
            'Developed role-based access controls (RBAC) with a user-friendly interface for assigning roles, viewing permissions hierarchies, and managing access rights. Integrated detailed filtering for quick search of users and roles.',
        tech: 'react, material-ui, classnames, vite, react-query, zod',
        achievements:
            'Increased administrative efficiency and simplified role management processes, resulting in a reduction in permission-related errors.',
    },
    {
        name: 'Car Insurance Calculator',
        description:
            'Designed a responsive front-end for a car insurance calculator, allowing customers to input vehicle and driver information to receive instant quotes based on coverage preferences.',
        features:
            'Created dynamic, user-friendly forms with real-time input validation and feedback to enhance the quote calculation process. Developed custom styling and logic to handle varying quote options to ensure a smooth user experience.',
        tech: 'react, material-ui, recoil, react-query',
        achievements:
            'Increased administrative efficiency and simplified role management processes, resulting in a reduction in permission-related errors.',
    },
]

export const CV = () => {
    return (
        <Box maxWidth="50vw" marginX="auto">
            <Stack justifyContent="space-around">
                <Typography variant="h4">#Skills</Typography>
                {links.map(([name, href]) => (
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
