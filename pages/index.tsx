import type { NextPage } from 'next'
import Head from 'next/head'
import {PostCard, Categories , PostWidget, Header} from "../components"
import {getPosts} from "../services"


const posts = [
  {title:"React app all the way", excerpt:"This is to hail the overlord of react"},
  {title:"React is the best", excerpt:"All hail React the King of framework"},
]

const Home: NextPage = ({posts}) => {
  return (
    <div>
      <Head>
        <title>
          Admit AS
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {posts?.map((post,index) =>(
        <div>
          <PostCard post={post.node} key={post.node.title} />
        </div>
      ))}
      <Categories/>
      <PostWidget/>

      
    </div>
  )
}

export default Home

export async function getStaticProps (){
  const posts = (await getPosts())|| []

  return {
    props: {posts}
  }
}
