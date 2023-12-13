import { LazyExoticComponent } from 'react'

type Route = {
    key: string
    path: string
    component: LazyExoticComponent<() => JSX.Element>
    // authority: string[]
}

export type Routes = Route[]
