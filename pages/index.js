import Head from 'next/head'
import styles from '../styles/Home.module.scss'

//  components
import Search from '../components/Search'
import MainContent from '../components/MainContent'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>snappea</title>
        <meta name="description" content="youtube downloader" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <Search />
      <MainContent />
    </div>
  )
}
