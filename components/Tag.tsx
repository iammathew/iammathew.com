import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
  xl?: boolean
}

const Tag = ({ text, xl }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a
        className={`mr-3 bg-gradient-to-br from-[#56CCF2] to-[#2F80ED] bg-clip-text font-bold uppercase text-transparent ${
          xl ? 'text-xl' : 'text-sm'
        }`}
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
