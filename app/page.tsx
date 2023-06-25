import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col h-screen font-bold text-gray-800
        lg:w-3/4 sm:w-full m-auto px-10">
        <NavBar/>
        <Title/>
        <Details/>
    </main>
  )
}


function AppIcon (
  { src, alt, color } :
  { src: string; alt: string, color: string } )
{
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <div className={`h-20 w-20 ${color} rounded-[1rem]`}/>
      <div className='text-sm'>{alt}</div>
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
    className='group transition-all duration-300 ease-in-out'>
    <span className="bg-left-bottom bg-gradient-to-r from-gray-800 to-gray-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
      {label}
    </span>
  </Link>
  )
}

function NavBar ()
{
  return (
    <nav className="flex justify-between py-4">
      <NavLink href="/projects" label='Projects'/>
      <NavLink href="/about" label='About Us'/>
      <NavLink href="/team" label='Team'/>
    </nav>
  )
}

function Title ()
{
  return (
    <div className='flex-1 min-h-screen flex justify-center items-center'>
      <div className="flex flex-col items-center font-bold text-8xl gap-32">
        <div className='flex flex-col items-center'>
          <div>Volfram Studio</div>
          <div className='font-bold text-3xl text-gray-500'>building a new ecosystem</div>
        </div>
        <AppPreview/>
      </div>
    </div>
  )
}

function AppPreview ()
{
  return (
    <section className='flex flex-wrap justify-center gap-16'>
      <AppIcon src='' alt='Kodkod' color='bg-[#FFE49D]'/>
      <AppIcon src='' alt='Humpback' color='bg-[#9DCAFF]'/>
      <AppIcon src='' alt='Crow' color='bg-[#404040]'/>
      <AppIcon src='' alt='Buho' color='bg-[#B5CDAD]'/>
      <AppIcon src='' alt='Longshot' color='bg-[#FF8787]'/>
    </section>
  )
}

function Details()
{
  return (
    <section className='rounded-lg bg-gray-100 p-10 flex flex-col gap-8'>
      <DetailsEntry 
        title='Kodkod'
        color='bg-[#FFE49D]'
        description='Cross platform note taking app with markdown support, code highlighting, custom fonts, custom background colors, cloud sync, plug-in support, drawing, stylus support, and more.'
      />
      <DetailsEntry 
        title='Humpback'
        color='bg-[#9DCAFF]'
        description='Music player with a focus on simplicity and ease of use. Supports playlists, album art, lyrics, and more. Has analytics (like Spotify Wrapped, but you can access it on-demand).'
      />
      <DetailsEntry 
        title='Crow'
        color='bg-[#404040]'
        description='Cross platform note taking app with markdown support, code highlighting, custom fonts, custom background colors, cloud sync, plug-in support, drawing, stylus support, and more.'
      />
      <DetailsEntry 
        title='Buho'
        color='bg-[#B5CDAD]'
        description='Cross platform note taking app with markdown support, code highlighting, custom fonts, custom background colors, cloud sync, plug-in support, drawing, stylus support, and more.'
      />
      <DetailsEntry 
        title='Longshot'
        color='bg-[#FF8787]'
        description='Cross platform note taking app with markdown support, code highlighting, custom fonts, custom background colors, cloud sync, plug-in support, drawing, stylus support, and more.'
      />
    </section>
  )
}

function DetailsEntry (
  { title, color, description } :
  { title: string; color: string; description: string } )
{
  return (
    <div className='flex gap-4'>
      <div className={`w-20 h-20 ${color} rounded-[1rem]`}/>
      <div className='flex flex-col flex w-48'>
        <h1 className='justify-self-start'>{title}</h1>
        <h1 className='justify-self-start font-thin text-sm'>v0.0.3 (alpha)</h1>
      </div>
      <div className='flex flex-col font-thin text-sm flex-1'>
        <p>
        {description}
        </p>
      </div>
    </div>
  )
}