import { ReactNode } from 'react'
import Image from '@/components/Image'
import Bleed from 'pliny/ui/Bleed'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import PageSubtitle from '@/components/PageSubtitle'
import PageDate from '@/components/PageDate'
import PostAiContent from '@/components/PostAIContent'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostMinimal({ content, next, prev, children }: LayoutProps) {
  const { slug, title, summary, date, images, aiContent } = content
  const displayImage =
    images && images.length > 0 ? images[0] : 'https://picsum.photos/seed/picsum/800/400'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 pb-8 dark:border-gray-700">
            <div className="w-full">
              <Bleed>
                <div className="relative aspect-[2/1] w-full">
                  <Image
                    src={displayImage}
                    alt={title}
                    fill
                    className="rounded-lg object-cover shadow-2xl"
                  />
                </div>
              </Bleed>
            </div>
            <div className="relative pt-10">
              <PageTitle>{title}</PageTitle>
              <PageSubtitle>{summary}</PageSubtitle>
              <div className="mt-8 flex flex-row text-gray-500 dark:text-gray-400">
                <PageDate>{date}</PageDate>
                {aiContent && <PostAiContent />}
              </div>
            </div>
          </div>
          <div className="prose max-w-none py-4 text-lg dark:prose-invert lg:prose-xl prose-img:rounded-lg">
            {children}
          </div>
          {siteMetadata.comments && (
            <div className="py-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              <Comments slug={slug} />
            </div>
          )}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              <div className="pr-4 pt-4 xl:pt-8">
                {prev && prev.path && (
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                )}
              </div>
              <div className="pl-4 pt-4 text-right xl:pt-8">
                {next && next.path && (
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                )}
              </div>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
