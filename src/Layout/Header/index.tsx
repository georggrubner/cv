import { useColorScheme } from '@mui/material/styles'
import { Box, IconButton, Stack } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'
import React from 'react'

export const Header = () => {
    const { mode, setMode } = useColorScheme()
    React.useEffect(() => {
        if (!mode) {
            setMode('dark')
        }
        // only on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const nextTheme = mode === 'dark' ? 'light' : 'dark'

    return (
        <Stack justifyContent="space-around" height={64} direction="row" alignItems="center">
            <Box>left</Box>
            <Stack direction="row">
                <IconButton
                    title={`Switch to ${nextTheme} theme`}
                    aria-label={nextTheme}
                    onClick={() => setMode(nextTheme)}
                >
                    {mode === 'dark' ? <LightMode /> : <DarkMode />}
                </IconButton>
            </Stack>
        </Stack>
    )
}
