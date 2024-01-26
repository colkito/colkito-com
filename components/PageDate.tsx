import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  locale: Intl.LocalesArgument
}

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

export default function PageDate({ children, locale }: Props) {
  const currentDate = new Date(children as string)
  const currentDateISOStr = currentDate.toISOString()

  return (
    <time
      className="text-base font-medium leading-6"
      dateTime={currentDateISOStr}
      title={currentDateISOStr}
    >
      {currentDate.toLocaleDateString(locale, postDateTemplate)}
    </time>
  )
}
