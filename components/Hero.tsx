"use client"
import Image from 'next/image'
import { CustomButton } from '.'
import { useRouter } from 'next/navigation'

const Hero = () => {
    const router = useRouter()

    const handleScroll = () => {
        router.push(`#carCard`)
    }

  return (
    <div className='hero'>

        <div className='flex-1 pt-36 padding-x'>

            <h1 className='hero__title'>
                Bul, oku yada araç kirala -- hızlı ve kolay!
            </h1>

            <p className='hero__subtitle'>
                Zahmetsiz rezervasyon süreci ile araç
                kiralama deneyiminizi kolaylaştırın.
            </p>

            <CustomButton
                  title="Araçları Keşfedin"
                  containerStyles="bg-primary-blue text-white rounded-full mt-10"
                  btnType='button'
                  handleClick={handleScroll} rightIcon={''}           />

        </div>

        <div className='hero__image-container'>

            <div className='hero__image'>

                <img src='/hero-bg.png'
                className='absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden'/>

                <Image 
                src="/hero.png" 
                alt='hero'
                fill
                className='object-contain'/>
                </div>

                

        </div>
    </div>
  )
}

export default Hero