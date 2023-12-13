import { forwardRef } from 'react'
import classNames from 'classnames'
import type { CommonProps } from '../@types/common'
import type { ComponentPropsWithRef, MouseEvent, ReactNode } from 'react'

import Spinner from '../Spinner/Spinner'

const defaultClass = 'button'

const variantMap = {
    solid: 'button-solid',
    plain: 'button-plain',
    default: 'button-default',
}

const sizeMap = {
    sm: 'button-sm',
    md: 'button-md',
    lg: 'button-lg',
}

const shapeMap = {
    none: 'rounded-none',
    round: 'rounded',
    circle: 'rounded-full',
}

interface ButtonProps extends CommonProps, ComponentPropsWithRef<'button'> {
    size?: 'sm' | 'md' | 'lg'
    variant?: 'default' | 'solid' | 'plain'
    shape?: 'none' | 'round' | 'circle'
    icon?: string | ReactNode
    isLoading?: boolean
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        size = 'md',
        variant = 'default',
        shape = 'round',
        icon,
        isLoading,
        className,
        children,
        ...rest
    } = props

    const sizeClass = sizeMap[size] || sizeMap.md
    const variantClass = variantMap[variant] || variantMap.default
    const shapeClass = shapeMap[shape] || shapeMap.round

    const classes = classNames(
        defaultClass,
        className,
        sizeClass,
        variantClass,
        shapeClass,
        icon && !children ? 'button-icon' : '',
        isLoading && !icon && !children ? 'button-icon' : ''
    )

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { onClick } = props

        onClick?.(e)
    }

    return (
        <button ref={ref} {...rest} onClick={handleClick} className={classes}>
            {isLoading && <Spinner />}
            {!isLoading && icon && (
                <span className="flex-shrink-0">{icon}</span>
            )}
            {children}
        </button>
    )
})

export default Button
