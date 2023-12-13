import Button from '@/components/ui/Button'

function Variant() {
    return (
        <div className="flex items-center gap-3 flex-wrap">
            <Button>Default</Button>
            <Button variant="solid">Solid</Button>
            <Button variant="plain">Plain</Button>
        </div>
    )
}

export default Variant
