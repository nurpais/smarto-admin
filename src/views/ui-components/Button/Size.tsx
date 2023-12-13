import Button from '@/components/ui/Button'

function Size() {
    return (
        <div className="flex items-center gap-3 flex-wrap">
            <Button size="sm">Small (sm)</Button>
            <Button size="md">Medium (md)</Button>
            <Button size="lg">Large (lg)</Button>
        </div>
    )
}

export default Size
