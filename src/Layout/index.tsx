import { Stack } from '@mui/material'
import { Body } from './Body'
import { Header } from './Header'

export const Layout = () => (
    <Stack gap={20}>
        <Header />
        <Body />
    </Stack>
)
