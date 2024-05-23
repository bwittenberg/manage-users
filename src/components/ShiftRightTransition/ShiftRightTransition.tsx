import { PropsWithChildren, Ref } from 'react'
import { CSSTransition } from 'react-transition-group'
import m from './ShiftRightTransition.module.css'

type Props<T> = PropsWithChildren<{ nodeRef: T; in: boolean }>

export const ShiftRightTransition = <T extends Ref<HTMLElement>>({
  children,
  nodeRef,
  in: animateIn
}: Props<T>) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={animateIn}
      appear={animateIn}
      timeout={200}
      classNames={{ ...m }}
    >
      {children}
    </CSSTransition>
  )
}
