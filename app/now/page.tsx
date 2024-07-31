import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: "What I'm doing now" })

export default function NowPage() {
  return (
    <div>
      <div className="prose max-w-none pt-8 dark:prose-invert">
        <h1>What I'm doing now</h1>
        <p>Updated: 2024-07-15</p>

        <h2>Finishing a Sabbatical Year</h2>
        <p>
          After leaving my last company job, I decided to take a sabbatical to
          focus on my family and health. I've been traveling across various provinces of Argentina
          and visiting friends in Uruguay. It's been incredibly refreshing, and I now feel
          re-energized and ready to dive into long-term projects. Currently, I'm in Brazil, enjoying
          a deeper connection with nature.
        </p>

        <h2>Learning Portuguese with Natives</h2>
        <p>
          I've started taking in-person group classes to learn Portuguese. Luckily, there are many
          Argentinians here, which makes it easier for me to start from scratch. It's been a great
          experience immersing myself in the local culture and language.
        </p>

        <h2>Exploring GEN AI and Digital Art</h2>
        <p>
          I'm applying my knowledge of GEN AI to create digital art inspired by local culture and
          nature. This includes visuals and music. I'm also exploring new AI models and learning how
          to use them effectively. I believe that chat interfaces are the most intuitive way to
          perform many tasks, and I'm excited to see where this technology can take me.
        </p>

        <hr className="divider my-6" />

        <p>
          I hope more people find inspiration in "now" pages like this one, as I found it in{' '}
          <Link href="https://maraoz.com/now" target="_blank">
            maraoz's one
          </Link>
          . If you are interested,{' '}
          <Link href="https://nownownow.com/about" target="_blank">
            learn more here
          </Link>
          !
        </p>
      </div>
    </div>
  )
}
