import Head from 'next/head'
import SideBar from '../components/SideBar/SideBar'

const Home = () => {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <Head>
                <title>Spotify Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <SideBar />
                {/* Center */}
            </main>
            <div>
                {/* Player */}
            </div>
        </div>
    )
}

export default Home