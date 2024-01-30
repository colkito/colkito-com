'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useInView } from 'react-intersection-observer'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '100px 0px',
  })

  return (
    <div ref={ref}>
      {inView && siteMetadata.comments && (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      )}
    </div>
  )
}
