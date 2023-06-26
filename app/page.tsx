'use client'

import Image from 'next/image'
import Link from 'next/link';
import { motion, stagger } from 'framer-motion';

import AnimatedText from '../components/AnimatedText';


export default function Home() {
  return (
    <main className="flex flex-col h-screen font-bold text-gray-800">
        <Title/>
    </main>
  )
}

function Title ()
{
  return (
    <div className='flex-1 min-h-screen flex justify-center items-center'>
      <div className="flex flex-col items-center font-bold gap-32">
        <div className='flex flex-col items-center'>
          <motion.div
            initial={{ translateY: 0 }}
            animate={{ translateY: -200 }}
            transition={{ duration: .5, delay: 2, ease: 'easeInOut' }}
          >
            <AnimatedText text="Volfram Studio" classes="text-[10vw] xl:text-[8vw]"/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5, delay: 2.5, ease: 'easeInOut' }}
          >
          </motion.div>
          <Sec sections={["dev", "dev", "design"]} classes=""/>
          {/*<AnimatedText text="building an ecosystem" classes="font-bold text-3xl text-gray-500"/>*/}
        </div>
      </div>
    </div>
  )
}

function Sec(
  { sections, classes } :
  { sections: string[]; classes: string }
) {
  const titleVariants = {
    initial: { opacity: 0 },
    animate:
    {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.5, delayChildren: 3 },
      delay: 3,
    },
  }

  const letterVariants = {
    initial: { opacity: 0, translateY: -200 },
    animate: { opacity: 1, translateY: -200 },
  }

  return (
    <motion.h1 initial="initial" animate="animate" variants={titleVariants}
      className='flex flex-row gap-4'
    >
      {sections.map((section, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: 'inline-block' }}
          className={classes}
        >
          <div className="border-2 border-gray-200 w-64 aspect-[16/11] rounded-[1rem]">
            <Image
              src={`/${section}.jpg`}
              alt="dev"
              layout="fill"
              style={{ border: '1px solid #000', objectFit: 'cover', borderRadius: '1rem' }}
            />

          </div>
        </motion.span>
      ))}
    </motion.h1>
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
      <AppIcon src='' alt='Pulpo' color='bg-[#c09ef7]'/>
      <AppIcon src='' alt='Husky' color='bg-gray-200'/>
      <AppIcon src='' alt='Convivencia' color='bg-[#f2c299]'/>
      <AppIcon src='' alt='-' color='bg-[#EEE]'/>
      <AppIcon src='' alt='-' color='bg-[#EEE]'/>
    </section>
  )
}

function Details()
{
  return (
    <section className='rounded-lg bg-gray-100 p-10 flex flex-col gap-8 mb-20'>
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
      <DetailsEntry 
        title='Pulpo'
        color='bg-[#c09ef7]'
        description='Open source alternative to Astropad Studio. Allows you to use your iPad as a drawing tablet for your computer. Supports Windows, Mac, and Linux.'
      />
      <DetailsEntry 
        title='Husky'
        color='bg-gray-200'
        description='Debate-focused app.'
      />
      <DetailsEntry 
        title='Convivencia'
        color='bg-[#f2c299]'
        description='Activity tracker for better coexistence with roommates and family members'
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