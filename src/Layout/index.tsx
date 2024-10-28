import { Stack } from '@mui/material'
import { Body } from './Body'
import { Header } from './Header'

export const Layout = () => {
    return (
        <Stack>
            <Header />
            <Body />
        </Stack>
    )
}
