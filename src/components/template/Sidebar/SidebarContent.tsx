import { ReactNode } from 'react'

import { NavigationTree } from '@/@types/navigation'
import SidebarSingleItem from './SidebarSingleItem'
import SidebarDropdownItem from './SidebarDropdownItem'

interface SidebarProps {
    navigationTree: NavigationTree[]
}

const getNavItem = (nav: NavigationTree): ReactNode => {
    if (nav.subMenu && nav?.subMenu.length > 0) {
        return <SidebarDropdownItem key={nav.key} items={nav.subMenu} />
    }

    return <SidebarSingleItem key={nav.key} item={nav} />
}

function SidebarContent(props: SidebarProps) {
    const { navigationTree } = props

    return <div>{navigationTree.map((nav) => getNavItem(nav))}</div>
}

export default SidebarContent
