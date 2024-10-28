import { useColorScheme } from '@mui/material/styles'
import { Box, IconButton } from '@mui/material'
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

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                height: 64,
            }}
        >
            <IconButton
                aria-label={mode === 'dark' ? 'light' : 'dark'}
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            >
                {mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
        </Box>
    )
}
