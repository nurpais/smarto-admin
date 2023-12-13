import { NavigationTree } from '@/@types/navigation'
import { Link } from 'react-router-dom'

interface SidebarSingleItemProps {
    item: NavigationTree
}

function SidebarSingleItem({ item }: SidebarSingleItemProps) {
    return (
        <Link to={item.path} target={item.isExternalLink ? '_blank' : ''}>
            {item.title}
        </Link>
    )
}

export default SidebarSingleItem
