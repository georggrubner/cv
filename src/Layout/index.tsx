import { Stack } from '@mui/material'
import { Body } from './Body'
import { Header } from './Header'

export const Layout = () => (
    <Stack gap={{ xs: 8, md: 20 }}>
        <Header />
        <Body />
    </Stack>
)
