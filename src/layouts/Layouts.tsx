import { useState, lazy, Suspense } from 'react'

const DefaultLayout = lazy(() => import('./DefaultLayout'))
const AuthLayout = lazy(() => import('./AuthLayout'))

function Layouts() {
    const [authenticated] = useState(true)

    const AppLayout = () => {
        if (authenticated) {
            return <DefaultLayout />
        }
        return <AuthLayout />
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppLayout />
        </Suspense>
    )
}

export default Layouts
