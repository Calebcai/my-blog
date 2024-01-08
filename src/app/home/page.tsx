'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'

export default function Home() {
  // const router = useRouter()
  return (
    <>
      <Header></Header>
      <div>
        <div className='w-full h-full'>
          哈哈哈哈
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}