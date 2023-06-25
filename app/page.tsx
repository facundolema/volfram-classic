import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col h-screen font-bold text-gray-800
        lg:w-1/2 sm:w-full m-auto px-10 justify-center">
        <NavBar/>
        <Title/>
        <AppPreview/>
        <Details/>
    </main>
  )
}


function AppIcon (
  { src, alt, color } :
  { src: string; alt: string, color: string })
{
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <div className={`h-20 w-20 bg-[#DDD] rounded-[1rem]`}/>
      <div className=''>{alt}</div>
    </div>
  )
}

function NavLink (
  { href, label } :
  { href: string; label: string })
{
  return (
    <Link
    href={href}
    className='hover:text-gray-500 group transition-all duration-300 ease-in-out'>
    <span className="bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
      {label}
    </span>
  </Link>
  )
}

function NavBar ()
{
  return (
    <nav className="flex justify-between">
      <NavLink href="/projects" label='Projects'/>
      <NavLink href="/about" label='About Us'/>
      <NavLink href="/team" label='Team'/>
    </nav>
  )
}

function Title ()
{
  return (
    <section className='flex flex-col justify-self-center'>
      <div className="flex items-center justify-center font-bold text-8xl">
        Volfram Studio
      </div>
      <div className="flex items-end justify-center font-bold text-3xl text-gray-500">
        building a new ecosystem
      </div>
    </section>
  )
}

function AppPreview ()
{
  return (
    <section className='flex flex-wrap justify-center gap-16'>
      <AppIcon src='' alt='Kodkod' color='#FFE49D'/>
      <AppIcon src='' alt='Humpback' color='#9DCAFF'/>
      <AppIcon src='' alt='Crow' color='#404040'/>
      <AppIcon src='' alt='Buho' color='#B5CDAD'/>
      <AppIcon src='' alt='Longshot' color='#FF8787'/>
    </section>
  )
}

function Details()
{
  return (
    <section className='rounded-lg bg-gray-200 p-10'>
      <div className='border border-gray-400 flex items-center'>
          <div className={`h-20 w-20 bg-[#DDD] rounded-[1rem]`}/>
          <div className='flex flex-col h-20 bg-green-200 p-2'>
            <h1 className='justify-self-start'>Kodkod</h1>
            <h1 className='justify-self-start font-thin text-sm'>v0.0.3 (alpha)</h1>
          </div>
          <div className='flex flex-col font-thin text-sm'>
            <p>
            Cross platform note taking app with markdown support, code highlighting,
            custom fonts, custom background colors, cloud sync, plug-in support, drawing,
            stylus support, and more. 
            </p>
          </div>
      </div>
    </section>
  )
}