import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiMaildotru } from 'react-icons/si'

const components = {
  github: FaGithubAlt,
  linkedin: FaLinkedinIn,
  mail: SiMaildotru,
  twitter: FaXTwitter,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
  title?: string
}

const SocialIcon = ({ kind, href, title, size = 8 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600 dark:text-gray-400"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      title={title}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
