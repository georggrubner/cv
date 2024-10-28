import { Person } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
    return (
        <Stack justifyContent="space-around" height={64} direction="row" alignItems="center">
            <Box>left</Box>
            <Stack direction="row">
                <IconButton>
                    <Person />
                </IconButton>
                <ThemeSwitcher />
            </Stack>
        </Stack>
    )
}
