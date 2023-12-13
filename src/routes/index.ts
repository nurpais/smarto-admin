import { Routes } from '@/@types/routes'
import uiComponentsRoute from './uiComponentsRoute'
import appRoute from './appRoute'
import authRoute from './authRoute'

export const publicRoutes: Routes = [...authRoute]
export const protectedRoutes: Routes = [...appRoute, ...uiComponentsRoute]
