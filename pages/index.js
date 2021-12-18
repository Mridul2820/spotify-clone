import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Center from '../components/center/Center'
import SideBar from '../components/sidenav/SideBar'

const Home = () => {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <Head>
                <title>Spotify Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='flex'>
                <SideBar />
                <Center />
            </main>
            <div>
                {/* Player */}
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const session = await getSession(context);

    return {
        props: {
            session
        }
    }
}

export default Home