/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "@/components/ui/MovingBorder"

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relateive overflow-hidden mx-auto py-10 md:py-0'>


        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/>
        <div className='p-4 realtive z-10 w-full text-center'>
                
            <h1 className="mt-28 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Master the art of music
            </h1>

            <p className="mt-16 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Dive into our comprehensive music courses and transform your musical journey today. 
            Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
            </p>

                <div className='mt-7'>
                    <Link href={"/courses"}>
                        <Button>
                            Explore Courses
                        </Button>
                    </Link>
                </div>


          
            </div>
    </div>
  )
}

export default HeroSection
