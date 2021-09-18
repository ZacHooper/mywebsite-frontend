import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import MoreStories from '@/components/more-stories'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import SectionSeparator from '@/components/section-separator'
import Layout from '@/components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts, getAllProjectsWithSlug, getProjectAndMoreProjects } from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'

export default function Project({ project, moreProjects, preview }) {
  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {project.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <PostHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
              />
              <PostBody content={project.content} />
            </article>
            <SectionSeparator />
            {moreProjects.length > 0 && <MoreStories posts={moreProjects} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getProjectAndMoreProjects(params.slug, preview)
  const content = await markdownToHtml(data?.projects[0]?.content || '')

  return {
    props: {
      preview,
      project: {
        ...data?.projects[0],
        content,
      },
      moreProjects: data?.moreProjects,
    },
  }
}

export async function getStaticPaths() {
  const allProjects = await getAllProjectsWithSlug()
  return {
    paths: allProjects?.map((project) => `/projects/${project.slug}`) || [],
    fallback: true,
  }
}
