import { Link, Stack, Typography } from '@mui/material'

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
    ['Storybook', 'https://github.com/storybookjs/storybook'],
    ['classnames', 'https://github.com/JedWatson/classnames'],
]

export const CV = () => {
    return (
        <Stack justifyContent="space-around" marginX={10}>
            <Typography variant="h4">#Skills</Typography>
            {links.map(([name, href]) => (
                <Link width="fit-content" href={href} target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">{name}</Typography>
                </Link>
            ))}
        </Stack>
    )
}
