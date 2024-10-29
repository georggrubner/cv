import { GitHub, LinkedIn, Mail, Person } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ReactNode } from 'react'

const linksMap: Array<[ReactNode, string]> = [
    [<Person />, ''],
    [<LinkedIn />, 'https://www.linkedin.com/in/georg-grubner-3547861a6/'],
    [<GitHub />, 'https://github.com/georggrubner'],
    [<Mail />, 'mailto:georg@grubner.tech'],
]

export const Header = () => {
    return (
        <Stack justifyContent="space-around" height={64} direction="row" alignItems="center">
            <Box>left</Box>
            <Stack direction="row">
                {linksMap.map(([icon, href]) => (
                    <IconButton target="_blank" rel="noopener noreferrer" key={href} href={href}>
                        {icon}
                    </IconButton>
                ))}
                <ThemeSwitcher />
            </Stack>
        </Stack>
    )
}
