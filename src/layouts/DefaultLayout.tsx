import Sidebar from '@/components/template/Sidebar'
import Views from '@/views'

function DefaultLayout() {
    return (
        <div className="flex gap-10">
            <Sidebar />
            <Views />
        </div>
    )
}

export default DefaultLayout
