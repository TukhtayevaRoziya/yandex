import Image from 'next/image'
import preloader from '../../assets/images/preloader.png'

const Loader = () => {
  return (
    <div className='w-screen h-screen'>
      <Image src={preloader.src} layout='fill' alt='preloader' priority={true}/>
    </div>
  )
}

export default Loader
