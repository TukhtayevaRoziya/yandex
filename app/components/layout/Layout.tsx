import Head from 'next/head'
import { FC, useEffect, useState } from 'react'

interface ILayout{
  children: any,
  title: string
}

const Layout:FC<ILayout> = ({children, title}) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 4000);

    return ()=>{
      clearTimeout(timeout)
    }
  }, []);

  return (
    <div>
     <Head>
      <title>{title} | Yandex Taxi Map</title>
      </Head>
    </div>
  )
}

export default Layout
