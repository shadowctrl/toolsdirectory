'use client'
import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import { Button } from '../components/Button'
import prisma from '../../lib/primsa'
import { useSearchParams } from 'next/navigation'

interface Tools {
  icon: string
  name: string
  description: string
}

interface searchedprops {
  filteredtools: Tools[]
}

function Search() {
  const searchParams = useSearchParams()
  const query = searchParams?.get('s')
  const category = searchParams?.get('category')
  const pricing = searchParams?.get('pricing')
  const [filteredtools, setFilteredTools] = useState<Tools[] | []>([])

  const getFilteredTools = async () => {
    const data = await fetch(
      `/api/categories/search?searchTerm=${encodeURIComponent(
        query ?? ''
      )}&category=${encodeURIComponent(
        category ?? ''
      )}pricing=${encodeURIComponent(pricing ?? '')}`
    )
    const t = await data.json()
    console.log('====================================')
    console.log('t -->', t)
    console.log('====================================')
    setFilteredTools(t)
  }

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (query || category || pricing) {
      getFilteredTools()
    }
  }, [query, category, pricing])

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow bg-white dark:bg-gray-800 w-full pt-10 pl-6 pr-6 pb-6 text-center'>
        <div className='max-w-7xl mx-auto px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4  py-10'>
            {filteredtools.length ? (
              filteredtools.map((tool, idx) => (
                <div
                  key={idx}
                  className='rounded-md h-full w-full p-2 overflow-hidden bg-white border-slate-400 dark:bg-gray-800 dark:border-slate-500 border dark:group-hover:border-slate-300 group-hover:border-slate-700 relative z-50'
                >
                  <div className='relative z-50'>
                    <div className='p-4'>
                      <div className='absolute justify-evenly pt-[1px] pl-[9px] pb-[2px] pr-[5px] text-black dark:text-white right-0 opacity-100 top-0  left-0 bg-white dark:bg-gray-800'>
                        <span className='text-xl my-auto mx-1'>★</span>
                        <span className='text-xl my-auto'>Featured</span>
                      </div>
                      <h4 className='text-black dark:text-zinc-100 font-bold tracking-wide mt-6'>
                        {tool.name}
                      </h4>
                      <p className='mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm'>
                        {tool.description.slice(0, 50)}
                      </p>
                      <Button className='mt-2 dark:bg-white dark:text-black'>
                        Visit
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='justify-center'>
                <h1>No Tools Found</h1>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Search
