import React from 'react'
import courseDat from "@/data/musc_courses.json"
import Link from 'next/link'



const FeaturedSection = () => {
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wider uppercase'>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With The Best</p>
            </div>
        </div>


        <div>2</div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"} className="px-4 py-4 rounded-md border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            > View All Courses </Link>
            
        </div>
      
    </div>
  )
}

export default FeaturedSection
