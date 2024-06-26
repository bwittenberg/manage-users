import { ComponentProps } from 'react'
import { CSSTransition } from 'react-transition-group'
import m from './ShiftRightTransition.module.css'

type Props = Pick<
  ComponentProps<typeof CSSTransition>,
  'children' | 'nodeRef' | 'in'
>

export const ShiftRightTransition = ({
  children,
  nodeRef,
  in: animateIn
}: Props) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={animateIn}
      timeout={200}
      classNames={{ ...m }}
    >
      {children}
    </CSSTransition>
  )
}
