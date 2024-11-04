'use client'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import Image from 'next/image'
import Footer from '../../components/Footer'
import { useParams } from 'next/navigation'
import Link from 'next/link'

import URL from '../../../../public/url.png'

export default function Page() {
  const [categories, setcategories] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const params = useParams<{ category: string }>()
  console.log('====================================')
  console.log('params --->', params?.category)
  console.log('====================================')
  useEffect(() => {
    fetch('/api/categories?category=' + params?.category)
      .then((res) => res.json())
      .then((d) => {
        console.log('====================================')
        console.log('d --->', d)
        console.log('====================================')
        setLoading(false)
        setcategories(d)
      })
      .catch((err) => {
        console.log('====================================')
        console.log('err --->', err)
        console.log('====================================')
      })
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow bg-white dark:bg-gray-800 w-full pt-10 pl-6 pr-6 pb-6 text-center'>
        {loading === false ? (
          <div className='container mx-auto px-4 py-8'>
            <div className='max-w-7xl mx-auto px-8'>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10'>
                {categories?.tools?.map(
                  (
                    tool: {
                      url: string
                      name: any
                      icon: string
                      slug: string
                      description: string
                      shortDescription: string
                    },
                    idx: number
                  ) => (
                    <div
                      key={idx}
                      className='flex bg-white dark:bg-gray-800 dark:border ml-2 dark:border-slate-500 rounded-lg shadow-lg p-4'
                    >
                      <div className='flex flex-col justify-between'>
                        <div className='flex flex-row justify-center'>
                          <Image
                            src={tool.icon}
                            width={32}
                            height={32}
                            alt={tool.name}
                            className='w-8 h-8'
                          />
                          <span className='mt-1 ml-4'>
                            <Link
                              href={`/tool/${tool.slug}`}
                              className='text-black dark:text-white hover:underline'
                            >
                              {tool.name}
                            </Link>
                          </span>
                        </div>
                        <div className='flex flex-row justify-start'>
                          <p>{tool.shortDescription}</p>
                        </div>
                        <div className='flex flex-row justify-center'>
                          <a
                            href={`/tool/${tool.slug}`}
                            className='text-blue-500 hover:underline'
                          >
                            <Image src={URL} alt='url' width={24} height={24} />
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-row justify-center items-center'>
            <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-bg-black dark:border-bg-white'></div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}