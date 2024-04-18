import { Badge } from '../ui/badge'

export const TopItem = () => {
  return (
    <>
      <div className='flex flex-col items-start gap-y-5'>
        <Badge content='Point. 01' />
        <div className='text-2xl font-bold'>
          누구나 손쉽게 온라인 <div className='md:block hidden' />
          롤링 페이퍼를 만들 수 있어요
        </div>
        <div className='text-gray-500'>로그인 없이 자유롭게 만들어요.</div>
      </div>
      <div className='flex items-center '>
        <img src='/marketing1.png' alt='marketing1' />
      </div>
    </>
  )
}
