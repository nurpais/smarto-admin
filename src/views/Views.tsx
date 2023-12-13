import appConfig from '@/configs/app.config'

import ProtectedRoute from '@/components/route/ProtectedRoute'
import PublicRoute from '@/components/route/PublicRoute'

import { protectedRoutes, publicRoutes } from '@/routes'
import { Routes, Route, Navigate } from 'react-router-dom'

const { authenticatedEntryPath } = appConfig

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute />}>
                <Route
                    path="/"
                    element={<Navigate replace to={authenticatedEntryPath} />}
                />
                {protectedRoutes.map((route) => (
                    <Route
                        key={route.key}
                        path={route.path}
                        Component={route.component}
                    />
                ))}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>

            <Route path="/" element={<PublicRoute />}>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.key}
                        path={route.path}
                        Component={route.component}
                    />
                ))}
            </Route>
        </Routes>
    )
}

function Views() {
    return (
        <div>
            <AllRoutes />
        </div>
    )
}

export default Views
