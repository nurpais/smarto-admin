import { NavigationTree } from '@/@types/navigation'
import SidebarSingleItem from './SidebarSingleItem'

interface SidebarDropdownItemProps {
    items: NavigationTree[]
}

function SidebarDropdownItem({ items }: SidebarDropdownItemProps) {
    return (
        <div>
            {items.map((item) => (
                <SidebarSingleItem item={item} key={item.key} />
            ))}
        </div>
    )
}

export default SidebarDropdownItem
