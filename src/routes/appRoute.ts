import { lazy } from 'react'
import { Routes } from '@/@types/routes'

const appRoute: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
    },
]

export default appRoute
