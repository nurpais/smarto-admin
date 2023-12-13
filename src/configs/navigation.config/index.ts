import { NavigationTree } from '@/@types/navigation'
import appsNavigationConfig from './apps.navigation.config'
import uiComponentsNavigationConfig from './ui-components.navigation.config'

const navigationConfig: NavigationTree[] = [
    ...appsNavigationConfig,
    ...uiComponentsNavigationConfig,
]

export default navigationConfig
