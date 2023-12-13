import { ReactNode } from 'react'

interface DemoCardProps {
    title: string
    demoComponent: ReactNode
}

function DemoCard(props: DemoCardProps) {
    const { title, demoComponent } = props

    return (
        <div>
            <h4 className="mb-5">{title}</h4>
            <div className="p-5 border border-dark-200 rounded-md w-full">
                {demoComponent}
            </div>
        </div>
    )
}

export default DemoCard
