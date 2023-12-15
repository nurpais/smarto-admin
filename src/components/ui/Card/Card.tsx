import { ComponentPropsWithRef, forwardRef } from 'react'
import type { CommonProps } from '@/@types/common'
import classNames from 'classnames'

interface CardProps extends CommonProps, ComponentPropsWithRef<'div'> {
    shape?: 'round' | 'none'
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    const { children, className, shape = 'round', ...rest } = props

    const cardClass = classNames(
        'card',
        shape === 'round' && 'rounded-md',
        className
    )

    return (
        <div ref={ref} className={cardClass} {...rest}>
            {children}
        </div>
    )
})

export default Card
