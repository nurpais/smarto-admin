import { CommonProps } from '../ui/@types/common'

function PageContainer(props: CommonProps) {
    const { children } = props
    return <main>{children}</main>
}

export default PageContainer
