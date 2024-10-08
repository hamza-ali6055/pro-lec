import Link from 'next/link';
import { Button } from './ui/moving-border';
import {Spotlight} from './ui/Spotlight';


const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem} w-full bg-black rounded-md flex flex-col item-center justify-center relative
     overflow-hidden mx-auto py- md:py-0 '>
        <Spotlight
         className="top-40 left-0 md:left-60 md:top-20"
        fill="white" 
        />
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='mt-20 md:mt-0 text-4x1 md:text-7x1 font-bold bg-clip-text text-transparent bg-gradient-to-b 
            from-neutral-50 to-neutral-400'>Master the Craft of Coding</h1>
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit optio quaerat provident. Sit culpa facere quibusdam, possimus voluptatibus rem repudiandae totam officiis alias similique cupiditate expedita, aliquam exercitationem ut!
                </p>
                <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    <Link href="/courses">
                    <Button borderRadius="1.75rem" className=" bg-black text-white border-slate-800">
                        Explore courses
                    </Button>
                    </Link>
                </div>          
        </div>
    </div>
  )
}

export default HeroSection