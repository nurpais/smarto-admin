import { lazy } from 'react'
import { Routes } from '@/@types/routes'

const authRoute: Routes = [
    {
        key: 'signIn',
        path: '/sign-in',
        component: lazy(() => import('@/views/auth/SignIn')),
    },
]

export default authRoute
