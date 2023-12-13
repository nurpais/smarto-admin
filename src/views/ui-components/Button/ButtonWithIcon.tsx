import Button from '@/components/ui/Button'
import { HiCog, HiPencil } from 'react-icons/hi2'

function ButtonWithIcon() {
    return (
        <div className="flex items-center gap-3 flex-wrap">
            <Button icon={<HiPencil />}>Edit</Button>
            <Button variant="solid" icon={<HiCog />}>
                Settings
            </Button>
        </div>
    )
}

export default ButtonWithIcon
