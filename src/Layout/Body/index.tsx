import { Stack } from '@mui/material'
import { usePage } from '../../zustand'
import { CV } from './CV'
import { Home } from './Home'

export const Body = () => {
    const { page } = usePage()
    return <Stack justifyContent="center">{page === 'home' ? <Home /> : <CV />}</Stack>
}
