import gatofacha from '../assets/gatofacha.jpg'
import ButtonThems from '../components/ButtonThems'


const HeroSection = () => {
  return (

      <div className="grid p-6 grid-cols-3 gap-8 bg-gray-200 dark:bg-stone-950">
        <div className="flex flex-col col-span-2 gap-6">
          <div className="w-48 h-1 bg-stone-950 dark:bg-gray-500"></div>
          <h1 className="font-bold text-stone-900 dark:text-gray-200 text-9xl">Desarrollador Web</h1>
          <h3 className="text-gold text-5xl">React & Node.js</h3>
        </div>
        <div className="flex flex-col items-center gap-6 px-2 py-16">
          <ButtonThems />
          <img src={gatofacha} className='rounded-b-full w-64 h-auto' alt="" />
          <div className='flex flex-row gap-8 justify-center'>
            <a className='rounded-md bg-gradient-to-tr from-blue-500 to-blue-300 py-2 px-4' href="">Linkedin</a>
          </div>
        </div>
      </div>

  )
}


export default HeroSection;