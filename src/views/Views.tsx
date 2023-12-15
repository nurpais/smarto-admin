import appConfig from '@/configs/app.config'

import ProtectedRoute from '@/components/route/ProtectedRoute'
import PublicRoute from '@/components/route/PublicRoute'

import { protectedRoutes, publicRoutes } from '@/routes'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import PageContainer from '@/components/template/PageContainer'

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
                        element={
                            <PageContainer {...route.meta}>
                                {<route.component />}
                            </PageContainer>
                        }
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
        <Suspense fallback={<div>LOADING...</div>}>
            <AllRoutes />
        </Suspense>
    )
}

export default Views
