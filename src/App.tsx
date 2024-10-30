import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Layout } from "./Layout"
import { CssBaseline } from "@mui/material"

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

export const App = () => (
    <ThemeProvider theme={theme} defaultMode="system">
        <CssBaseline />
        <Layout />
    </ThemeProvider>
)
