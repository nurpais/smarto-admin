import classNames from 'classnames'
import { CgSpinner } from 'react-icons/cg'
import type { CommonProps } from '@/@types/common'

const Spinner = (props: CommonProps) => {
    const { className } = props
    const classes = classNames('animate-spin w-4 h-4', className)

    return <CgSpinner className={classes} />
}

export default Spinner
