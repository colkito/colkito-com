import { ReactNode } from 'react'
// import type { Authors } from 'contentlayer/generated'

interface Props {
  children: ReactNode
  // content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children }: Props) {
  return <div className="prose max-w-none pt-8 dark:prose-invert">{children}</div>
}
