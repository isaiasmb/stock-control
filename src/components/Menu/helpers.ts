import { MouseEvent } from 'react'

export const handleToggle = (
  setOpen: (value: React.SetStateAction<boolean>) => void
) => {
  setOpen((prevOpen) => !prevOpen)
}

export const handleClose = (
  event: MouseEvent<EventTarget>,
  setOpen: (value: React.SetStateAction<boolean>) => void,
  ref: React.RefObject<HTMLElement>
) => {
  if (ref.current && ref.current.contains(event.target as HTMLElement)) {
    return
  }

  setOpen(false)
}

export const handleListKeyDown = (
  event: React.KeyboardEvent,
  setOpen: (value: React.SetStateAction<boolean>) => void
) => {
  if (event.key === 'Tab') {
    event.preventDefault()
    setOpen(false)
  }
}
