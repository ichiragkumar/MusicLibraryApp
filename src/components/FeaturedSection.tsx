"use client"
import React from 'react'
import courseData from "@/data/musc_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'


interface Course{
    id: Number,
    title: String,
    slug:String,
    description: String,
    price: Number,
    instructor: String,
    isFeatured: Boolean,
    image: String 
}

const FeaturedSection = () => {
  const featureCourses = courseData.courses.filter(((eachCourse:Course) => eachCourse.isFeatured)) 

  return (
    <div className='py-12 bg-gray-900/[0.72]'>
        <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wider uppercase'>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With The Best</p>
            </div>
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 mx-3 gap-8 justify-center'>
            {featureCourses.map((eachFeatureCourse:Course) =>(
              <div key={(eachFeatureCourse.id).toString()} className='flex justify-center'>
                        <BackgroundGradient className='flex flex-col rounded-[22px] dark:bg-zinx-900 overflow-hidden h-full max-w-sm '>
                            <div className='p-4 sm:p-6 flex flex-col text-left flex-grow  '>

                                <p className='text-lg sm:text-xl font-bold text-black my-3 dark:text-neutral-200'>{eachFeatureCourse.title}</p>
                                <p className='text-lg sm:text-xl  text-neutral-200 my-3 dark:text-neutral-600 flex-grow'>{eachFeatureCourse.description}</p>
                                <Link href={`/courses/${eachFeatureCourse.slug}`}>Read more</Link>
                            </div>
                        </BackgroundGradient>
              </div>    
            ))}
        </div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"} className="px-4 py-4 rounded-md border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            > View All Courses </Link>
            
        </div>
      
    </div>
  )
}

export default FeaturedSection
