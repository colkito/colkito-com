interface Props {
  date: string
  locale: Intl.LocalesArgument
}

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

export default function PageDate({ date, locale }: Props) {
  const currentDate = new Date(date)
  const currentDateISOStr = currentDate.toISOString()

  return (
    <time
      className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
      dateTime={currentDateISOStr}
      title={currentDateISOStr}
    >
      {currentDate.toLocaleDateString(locale, postDateTemplate)}
    </time>
  )
}
