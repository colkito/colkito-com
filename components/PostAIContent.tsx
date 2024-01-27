import { SiOpenai } from 'react-icons/si'

export default function PostAiContent() {
  return (
    <div className="ml-2 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 px-2 text-xs uppercase text-gray-500 dark:border-gray-700 dark:bg-gray-500 dark:text-gray-300">
      <SiOpenai className="mr-1" /> AI assisted content
    </div>
  )
}
