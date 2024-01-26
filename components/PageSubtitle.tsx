import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageSubtitle({ children }: Props) {
  return (
    <h2 className="mt-4 text-xl leading-5 text-gray-500 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
      {children}
    </h2>
  )
}
