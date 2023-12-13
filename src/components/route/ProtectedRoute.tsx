import appConfig from '@/configs/app.config'

import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const { unAuthenticatedEntryPath } = appConfig

function ProtectedRoute() {
    const [authenticated] = useState(true)

    if (!authenticated) {
        return <Navigate replace to={unAuthenticatedEntryPath} />
    }

    return <Outlet />
}

export default ProtectedRoute
