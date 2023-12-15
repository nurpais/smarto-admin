import Header from '@/components/template/Header'
import Sidebar from '@/components/template/Sidebar'
import Views from '@/views'

function DefaultLayout() {
    return (
        <div className="flex flex-auto">
            <Sidebar />
            <div className="flex flex-col min-h-screen flex-auto w-full">
                <Header />
                <Views />
            </div>
        </div>
    )
}

export default DefaultLayout
