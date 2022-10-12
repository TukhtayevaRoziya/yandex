/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from 'next/head'
import Script from 'next/script'

import { FC, useEffect, useState } from 'react'
import FavIcon from '../../assets/images/preloader.png'

interface ILayout {
  children: any
  title: string
}

const Layout: FC<ILayout> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>{title} | Yandex Taxi Map</title>
        <meta name="description" content="Taxi Api" />
        <link rel="shutcut icon" href={FavIcon.src} type="image/png" />
      </Head>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
      />
      <div
        style={{
          maxWidth: 480,
        }}
        className="mx-auto overflow-hidden relative"
      >
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  )
}

export default Layout
