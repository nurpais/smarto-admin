import Button from '@/components/ui/Button'
import { HiPhone } from 'react-icons/hi2'

function Icon() {
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
                <Button
                    variant="plain"
                    shape="circle"
                    size="sm"
                    icon={<HiPhone />}
                />
                <Button isLoading shape="circle" icon={<HiPhone />} />
                <Button
                    variant="solid"
                    shape="circle"
                    size="lg"
                    icon={<HiPhone />}
                />
            </div>

            <div className="flex items-center gap-3 flex-wrap">
                <Button variant="plain" size="sm" icon={<HiPhone />} />
                <Button icon={<HiPhone />} />
                <Button variant="solid" size="lg" icon={<HiPhone />} />
            </div>
        </div>
    )
}

export default Icon
