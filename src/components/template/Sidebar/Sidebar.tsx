import navigationConfig from '@/configs/navigation.config'
import SidebarContent from './SidebarContent'
import SidebarFooter from './SidebarFooter'
import SidebarHeader from './SidebarHeader'

function Sidebar() {
    return (
        <div className="flex flex-col w-72 bg-white h-screen sticky top-0 z-20 border-r border-dark-150">
            <SidebarHeader />
            <SidebarContent navigationTree={navigationConfig} />
            <SidebarFooter />
        </div>
    )
}

export default Sidebar
