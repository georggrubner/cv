import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Layout } from './Layout'

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
            <Layout />
        </ThemeProvider>
    )
}
