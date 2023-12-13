import { useState } from 'react'
import Button from '@/components/ui/Button'
import { HiAcademicCap } from 'react-icons/hi2'

function Loading() {
    const [loading, setLoading] = useState(false)

    const onClick = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }
    return (
        <div className="flex items-center gap-3 flex-wrap">
            <Button isLoading={true}>None</Button>
            <Button isLoading={true} shape="circle" />
            <Button
                variant="solid"
                onClick={onClick}
                isLoading={loading}
                icon={<HiAcademicCap />}
            >
                Click Me!
            </Button>
        </div>
    )
}

export default Loading
