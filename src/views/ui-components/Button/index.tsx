import DemoLayout from '@/components/docs/DemoLayout'
import Size from './Size'
import Variant from './Variant'
import Card from '@/components/ui/Card'
import Disabled from './Disabled'
import Shape from './Shape'
import Icon from './Icon'
import ButtonWithIcon from './ButtonWithIcon'
import Loading from './Loading'

const demos = [
    {
        title: 'Variant',
        component: <Variant />,
    },
    {
        title: 'Size',
        component: <Size />,
    },
    {
        title: 'Disabled',
        component: <Disabled />,
    },
    {
        title: 'Shape',
        component: <Shape />,
    },
    {
        title: 'Icon',
        component: <Icon />,
    },
    {
        title: 'Button with icon',
        component: <ButtonWithIcon />,
    },
    {
        title: 'Loading',
        component: <Loading />,
    },
]

function Button() {
    return (
        <Card shape="round">
            <DemoLayout title="Button" demos={demos} />
        </Card>
    )
}

export default Button
