import appConfig from '@/configs/app.config'

import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const { authenticatedEntryPath } = appConfig

function PublicRoute() {
    const [authenticated] = useState(true)

    if (authenticated) {
        return <Navigate replace to={authenticatedEntryPath} />
    }

    return <Outlet />
}

export default PublicRoute
