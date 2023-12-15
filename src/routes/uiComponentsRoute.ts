import { Routes } from '@/@types/routes'
import { lazy } from 'react'

const uiComponentsRoute: Routes = [
    {
        key: 'uiComponents.button',
        path: 'ui-components/button',
        component: lazy(() => import('@/views/ui-components/Button')),
        meta: {
            // footer: false,
        },
    },
]

export default uiComponentsRoute
