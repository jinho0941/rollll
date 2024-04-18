import { Badge } from '../ui/badge'

export const BottomItem = () => {
  return (
    <>
      <div className='flex items-center lg:order-none order-2'>
        <img src='/marketing2.png' alt='marketing2' />
      </div>
      <div className='lg:ml-auto flex flex-col items-start gap-y-5 '>
        <Badge content='Point. 01' />
        <div className='text-2xl font-bold'>
          서로에게 이모지로 감정을
          <div className='md:block hidden' />
          표현해보세요
        </div>
        <div className='text-gray-500'>
          롤링 페이퍼에 이모지를 추가할 수 있어요.
        </div>
      </div>
    </>
  )
}
