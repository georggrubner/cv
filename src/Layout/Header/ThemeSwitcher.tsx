import { useEffect } from "react"
import { useColorScheme } from "@mui/material/styles"
import { IconButton } from "@mui/material"
import { DarkMode, LightMode } from "@mui/icons-material"

export const ThemeSwitcher = () => {
    const { mode, setMode } = useColorScheme()
    useEffect(() => {
        if (!mode) {
            setMode("dark")
        }
        // only on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const nextTheme = mode === "dark" ? "light" : "dark"
    const nextThemeText = `Switch to ${nextTheme} theme`

    return (
        <IconButton
            title={nextThemeText}
            aria-label={nextThemeText}
            onClick={() => setMode(nextTheme)}
        >
            {mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
    )
}
