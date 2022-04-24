import Link from '@/components/Link'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mb-16 mt-8">
        <h1 className="mb-4 bg-gradient-to-br from-[#0f45f8] to-[#05e6ff] bg-clip-text text-center text-8xl font-extrabold tracking-tight text-gray-900 transition-all hover:text-transparent dark:text-gray-100 dark:hover:text-transparent">
          Learn.
        </h1>
        <h1 className="mb-4 bg-gradient-to-br from-[#7F00FF] to-[#ff00ea] bg-clip-text text-center text-8xl font-extrabold tracking-tight text-gray-900 transition-all hover:text-transparent dark:text-gray-100 dark:hover:text-transparent">
          Build.
        </h1>
        <h1 className="mb-4 bg-gradient-to-br from-[#fe007b] to-[#ff6a00] bg-clip-text pb-2 text-center text-8xl font-extrabold tracking-tight text-gray-900 transition-all hover:text-transparent dark:text-gray-100 dark:hover:text-transparent">
          Ship.
        </h1>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Latest
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, cover } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 py-5 xl:grid xl:grid-cols-4 xl:space-y-0">
                  <div className="relative h-40 xl:mx-0">
                    <Image
                      alt="hero"
                      layout="fill"
                      className="rounded-xl"
                      src={cover ?? '/static/images/logo.png'}
                      objectFit="cover"
                    />
                  </div>
                  <div className="space-y-3 xl:col-span-3 xl:pl-5">
                    <div>
                      <time className="text-sm text-gray-500" dateTime={date}>
                        {formatDate(date)}
                      </time>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none leading-6 text-gray-500 dark:text-gray-400">
                      {summary}
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
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
