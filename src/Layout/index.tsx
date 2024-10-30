import { Stack } from '@mui/material'
import { Body } from './Body'
import { Header } from './Header'

export const Layout = () => (
    <Stack gap={{ xs: 10, md: 20 }}>
        <Header />
        <Body />
    </Stack>
)
