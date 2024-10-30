import { Stack } from "@mui/material"
import { Body } from "./Body"
import { Header } from "./Header"

export const Layout = () => (
    <Stack marginTop={8}>
        <Header />
        <Body />
    </Stack>
)
