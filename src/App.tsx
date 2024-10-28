import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Layout } from './Layout'
import { Box } from '@mui/material'

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
})

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor="background.default" color="text.primary" height="100vh">
                <Layout />
            </Box>
        </ThemeProvider>
    )
}
