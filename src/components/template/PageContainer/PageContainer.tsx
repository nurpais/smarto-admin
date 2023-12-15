import type { CommonProps } from '@/@types/common'
import Footer from '../Footer'
import { Meta } from '@/@types/routes'

interface PageContainerProps extends CommonProps, Meta {}

function PageContainer(props: PageContainerProps) {
    const { children, footer = true } = props

    return (
        <div className="h-full flex flex-col">
            <main className="h-full p-4 sm:p-6 md:px-8">{children}</main>
            {footer && <Footer />}
        </div>
    )
}

export default PageContainer
