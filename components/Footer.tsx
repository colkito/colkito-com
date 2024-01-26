import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mb-8 mt-16 flex flex-col items-center justify-between space-y-5 sm:flex-row-reverse sm:space-y-0">
        <div className="flex flex-row space-x-7">
          <SocialIcon title="Email me" kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon title="Check my GitHub" kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon title="Follow me on X" kind="twitter" href={siteMetadata.twitter} size={5} />
        </div>
        <div className="flex flex-row space-x-1 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{siteMetadata.title}</div>
        </div>
      </div>
    </footer>
  )
}
