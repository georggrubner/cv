import { GitHub, Home, LinkedIn, Mail, Person } from "@mui/icons-material"
import { IconButton, Stack, useTheme } from "@mui/material"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { ReactNode } from "react"
import { usePage } from "../../zustand"

const linksMap: Array<[ReactNode, string]> = [
    [<LinkedIn />, "https://www.linkedin.com/in/georg-grubner-3547861a6/"],
    [<GitHub />, "https://github.com/georggrubner"],
    [<Mail />, "mailto:georg@grubner.tech"],
]

export const Header = () => {
    const { setPage } = usePage()
    const theme = useTheme()

    return (
        <Stack
            justifyContent="space-around"
            height={64}
            direction="row"
            alignItems="center"
            position="fixed"
            top={0}
            width="100%"
            bgcolor="background.default"
            overflow="hidden"
            borderBottom={`1px solid ${theme.palette.divider}`}
            zIndex={100}
        >
            <IconButton onClick={() => setPage("home")}>
                <Home />
            </IconButton>
            <Stack direction="row">
                <IconButton onClick={() => setPage("cv")}>
                    <Person />
                </IconButton>
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
