'use client'
import { useRouter } from 'next/navigation'
import './index.css'
import './other.css'
import Dayliary from './components/dayliary'
import Case from './components/case'
import PdfList from './components/PdfList'
import Share from './components/share'
import { MDXProvider } from '@mdx-js/react'

export default function Home() {
  const router = useRouter()
  const components = {
    em: props => <i {...props} />
  }
  return (
    <MDXProvider components={components}>
      <div className='getheight w-full h-full'>
        {/* 卡片 */}
        <ul className='w-full flex justify-between p-10'>
          <li className='card'>
            <Dayliary />
          </li>
          <li className='card'>
            <Case />
          </li>
          <li className='card'>
            <PdfList />
          </li>
          <li className='card'>
            <Share />
          </li>
        </ul>
      </div>
    </MDXProvider>
  )
}