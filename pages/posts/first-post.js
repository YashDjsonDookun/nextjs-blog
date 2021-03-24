import Link from 'next/Link'
import Image from 'next/Image'
import Head from 'next/Head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <>
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
            <Image
                src="/images/profile.jpg" // Route of the image file
                height = {144} //Desired size with correct aspect ratio
                width = {144} //Desired size with correct aspect ratio
                alt = "Your Name"
            />
        </Layout>
        </>
    )
  }