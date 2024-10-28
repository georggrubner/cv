import { Stack } from '@mui/material'
import { Body } from './Body'
import { Header } from './Header'

export const Layout = () => {
    return (
        <Stack bgcolor="background.default" color="text.primary">
            <Header />
            <Body />
        </Stack>
    )
}
