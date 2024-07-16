import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-slate-200 dark:divide-slate-700">
        <div className="space-y-4 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            Hey, I'm colkito 👋
          </h1>
          <p className="text-lg leading-8 text-slate-500 dark:text-slate-300">
            🇦🇷 Argentine-born, 🇧🇷 Brazil-based tech enthusiast and digital explorer. <br />
            💻 Passionate about web tech, blockchain, AI, IoT, and robotics. <br />
            🔓 Advocate for online privacy and digital freedom. <br />
            🌱 Believer in the power of open-source and decentralization.
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Want to know what I'm up to right now? Check out my{' '}
            <Link
              href="/now"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              now page →
            </Link>
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Curious about my full story? Dive into my{' '}
            <Link
              href="/about"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              about page →
            </Link>
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Want to know more about my thoughts?{' '}
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Read my posts below ↓
            </Link>
          </p>
        </div>

        <ul className="divide-y divide-slate-200 dark:divide-slate-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-slate-500 dark:text-slate-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-slate-900 dark:text-slate-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-slate-500 dark:text-slate-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
