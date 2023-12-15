import { LazyExoticComponent } from 'react'

export interface Meta {
    footer?: boolean
}

type Route = {
    key: string
    path: string
    component: LazyExoticComponent<() => JSX.Element>
    meta?: Meta
}

export type Routes = Route[]
