import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl h-[50vh] bg-[#004D43]'>
      <div className='text  border-t-2 border-b-2  border-zinc-800 overflow-hidden flex gap-10 whitespace-nowrap'>
        < motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration:5}}  className='text-[15vw] leading-none font-["Space Grotesk"] font-semibold uppercase pt-5 mb-5'>we are ochi</ motion.h1>
        < motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration:5}}  className='text-[15vw] leading-none font-["Space Grotesk"] font-semibold uppercase pt-5 mb-5'>we are ochi</ motion.h1>
        < motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration:5}}  className='text-[15vw] leading-none font-["Space Grotesk"] font-semibold uppercase pt-5 mb-5'>we are ochi</ motion.h1>
      </div>
    </div>
  )
}

export default Marquee