import { motion } from 'framer-motion';

export default function AnimatedTitle (
    { text, classes } :
    { text: string; classes: string } )
{
  const titleVariants = {
    initial: { opacity: 0 },
    animate:
    {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  }

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0  },
  }

  return (
    <motion.h1 initial="initial" animate="animate" variants={titleVariants}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: 'inline-block' }}
          className={classes}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}