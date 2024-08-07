import { NotionBlocks } from '#/components/notionBlock'
import { getClient, getPageList, getPageMeta } from '#/api/notion'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'highlight.js/styles/github-dark.css'
import { Metadata } from 'next'

export const generateMetadata = async ({
  params: { id }
}: {
  params: { id: string }
}): Promise<Metadata> => {
  const { title, description } = await getPageMeta(getClient(), id)

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      type: 'article'
    }
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  dayjs.extend(relativeTime)
  const { title, createdAt, description } = await getPageMeta(getClient(), id)
  const formattedDate = dayjs(createdAt).format('YYYY-MM-DD')

  return (
    <main>
      <div className={'mb-8'}>
        <h1 className={'mb-1 text-3xl font-bold'}>{title}</h1>
        <p className={'text-gray-600'}>{description}</p>
        <time className={'text-gray-600'} dateTime={formattedDate}>
          {formattedDate}
        </time>
      </div>
      <div className={'text-base leading-loose'}>
        <NotionBlocks parentBlockId={id} />
      </div>
    </main>
  )
}
