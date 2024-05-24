import { ComponentProps } from 'react'
import { CSSTransition } from 'react-transition-group'
import m from './HighlightTransition.module.css'

type Props = Pick<
  ComponentProps<typeof CSSTransition>,
  'children' | 'nodeRef' | 'in'
>

export const HighlightTransition = ({
  children,
  nodeRef,
  in: animateIn
}: Props) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={animateIn}
      timeout={500}
      classNames={{ ...m }}
    >
      {children}
    </CSSTransition>
  )
}
