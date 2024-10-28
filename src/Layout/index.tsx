import { useColorScheme } from '@mui/material/styles'
import { Box, Button } from '@mui/material'
import { Body } from './Body'
import { Header } from './Header'

export const Layout = () => {
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
                borderRadius: 1,
                p: 3,
                minHeight: '200px',
            }}
        >
            <Header />
            <Body />
            <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>switch</Button>
        </Box>
    )
}
