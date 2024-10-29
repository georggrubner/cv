import { usePage } from '../../zustand'
import { CV } from './CV'
import { Home } from './Home'

export const Body = () => {
    const { page } = usePage()
    return <>{page === 'home' ? <Home /> : <CV />}</>
}
