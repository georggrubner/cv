import { useColorScheme } from '@mui/material/styles'
import { Box, Button } from '@mui/material'

export const Header = () => {
    const { mode, setMode } = useColorScheme()
    if (!mode) {
        return null
    }
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
            <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>switch</Button>
        </Box>
    )
}
