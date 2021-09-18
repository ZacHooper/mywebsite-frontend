import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Chart from '@/components/chart'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'

export default function Index({ allPosts, preview }) {
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Zac Hooper Portfolio</title>
        </Head>
        <Container>
          <Intro />          
          <Chart heading="About Me"
                 title="test" 
                 url="https://chart-studio.plotly.com/~zhooper/1.embed?modebar=false&link=false&logo=false" 
                 slug="test-slug" />
          <Chart heading="Skills"
                 title="test" 
                 url="https://chart-studio.plotly.com/~zhooper/3.embed?modebar=false&link=false&logo=false" 
                 slug="test-slug" />
          <Chart heading="Projects"
                 title="test" 
                 url="https://chart-studio.plotly.com/~zhooper/6.embed?modebar=false&link=false&logo=false" 
                 slug="test-slug" />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts, preview },
  }
}
