import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="pt-8">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug text-light-white hover:text-success">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 text-light-white">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 text-light-white">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
