import { useState, lazy, Suspense, useMemo } from 'react'

const DefaultLayout = lazy(() => import('./DefaultLayout'))
const AuthLayout = lazy(() => import('./AuthLayout'))

function Layouts() {
    const [authenticated] = useState(true)

    const AppLayout = useMemo(() => {
        if (authenticated) {
            return DefaultLayout
        }
        return AuthLayout
    }, [authenticated])

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppLayout />
        </Suspense>
    )
}

export default Layouts
