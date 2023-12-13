import navigationConfig from '@/configs/navigation.config'
import SidebarContent from './SidebarContent'
import SidebarFooter from './SidebarFooter'
import SidebarHeader from './SidebarHeader'

function Sidebar() {
    return (
        <div className="flex flex-col gap-20">
            <SidebarHeader />
            <SidebarContent navigationTree={navigationConfig} />
            <SidebarFooter />
        </div>
    )
}

export default Sidebar
