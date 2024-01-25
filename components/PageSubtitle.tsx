import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageSubtitle({ children }: Props) {
  return (
    <h2 className="text-left text-3xl leading-9 text-gray-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-7">
      {children}
    </h2>
  )
}
