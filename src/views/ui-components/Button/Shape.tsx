import Button from '@/components/ui/Button'

function Shape() {
    return (
        <div className="flex items-center gap-3 flex-wrap">
            <Button shape="none">None</Button>
            <Button>Rounded</Button>
            <Button shape="circle">Circle</Button>
        </div>
    )
}

export default Shape
