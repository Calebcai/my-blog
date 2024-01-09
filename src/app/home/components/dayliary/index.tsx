import React from 'react'
import { useRouter } from 'next/navigation'

const index = () => {
  const router = useRouter()
  return (
    <div>
      <div className='text-center'>日记本</div>
      <ul className='mt-4'>
        <li onClick={() => router.push('/article/2024/202401')}>2023年总结</li>
          <li>2024年计划</li>
      </ul>
    </div>
  )
}

export default index