import Image from './Image'
import Link from './Link'

const ProjectCard = ({ title, description, imgSrc, href }) => (
  <div className="md p-4 md:w-full">
    <div
      className={`${
        imgSrc && 'h-full'
      } flex flex-col border-opacity-60 dark:border-gray-700 md:flex-row`}
    >
      <div className="relative mr-0 min-h-[300px] flex-1 basis-5/12 rounded-xl border-[1px] drop-shadow-lg dark:border-0 dark:drop-shadow-none md:mr-4 md:min-h-[220px]">
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="rounded-xl bg-gray-800 object-center dark:bg-white"
                layout="fill"
                objectFit="cover"
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="rounded-xl bg-gray-800 object-center dark:bg-white"
              layout="fill"
              objectFit="cover"
            />
          ))}
      </div>
      <div className="flex-1 basis-7/12 py-6 md:py-0">
        <h2 className="mb-3 text-4xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-xl text-gray-500 dark:text-gray-400">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="bg-gradient-to-br from-[#56CCF2] to-[#2F80ED] bg-clip-text text-lg font-bold uppercase leading-6 text-transparent hover:from-[#abe8fc] hover:to-[#60a1f5]"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default ProjectCard
