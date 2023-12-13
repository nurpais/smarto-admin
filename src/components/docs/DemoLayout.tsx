import DemoCard from './DemoCard'

type Demo = {
    title: string
    component: JSX.Element
}

interface DemoLayoutProps {
    title: string
    demos: Demo[]
}

function DemoLayout(props: DemoLayoutProps) {
    const { title, demos } = props

    return (
        <div>
            <h2 className="mb-10">{title}</h2>

            <div className="space-y-8">
                {demos.map((demo) => (
                    <DemoCard
                        key={demo.title}
                        title={demo.title}
                        demoComponent={demo.component}
                    />
                ))}
            </div>
        </div>
    )
}

export default DemoLayout
